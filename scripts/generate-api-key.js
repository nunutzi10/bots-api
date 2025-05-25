import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { ArgumentParser } from 'argparse';

const prisma = new PrismaClient();

const JWT_SECRET = process.env.API_KEY_JWT_SECRET
const JWT_ALGORITHM = 'HS256';

async function generateApiKey(tenantId) {
  if (tenantId === null || tenantId === undefined || isNaN(parseInt(tenantId))) {
    console.error('❌ Error: El tenantId es requerido y debe ser un número.');
    console.log('Uso: npm run generate-key -- --tenantId <id>');
    console.log('O yarn generate-key --tenantId <id>');
    process.exit(1);
  }

  const parsedTenantId = parseInt(tenantId);

  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id: parsedTenantId },
    });

    if (!tenant) {
      console.error(`❌ Error: No se encontró un Tenant con el id ${parsedTenantId}. Asegúrate de que el tenant exista.`);
      process.exit(1);
    }

    const apiKeyIdentifier = uuidv4();

    const payload = {
      api_id: apiKeyIdentifier,
    };

    const token = jwt.sign(payload, JWT_SECRET, { algorithm: JWT_ALGORITHM });

    const newApiKey = await prisma.apiKey.create({
      data: {
        tenantId: parsedTenantId,
        key: token,
      },
    });

    console.log('✅ ¡API Key creada exitosamente!');
    console.log('---------------------------------');
    console.log(`🆔 ID (en DB): ${newApiKey.id}`);
    console.log(`🏢 Tenant ID: ${newApiKey.tenantId}`);
    console.log(`🗝️  Key (JWT): ${newApiKey.key}`);
    console.log(`⏰ Creada en: ${newApiKey.createdAt}`);
    console.log('---------------------------------');
    console.log('\nℹ️ Esta es la API Key que tu cliente debe usar:');
    console.log(newApiKey.key);

  } catch (error) {
    console.error('❌ Error generando la API key:', error);
    if (error.code === 'P2002' && error.meta?.target?.includes('key')) {
        console.error('Hubo una colisión de claves (key). Esto es muy raro con JWTs firmados con payloads/secretos únicos. Intenta de nuevo.');
    }
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

const main = () => {
  const parser = new ArgumentParser({
    description: 'Genera una nueva API Key para un tenant.'
  });

  parser.add_argument('--tenantId', {
    help: 'El ID del tenant para el cual generar la API key.',
    type: 'int',
    required: true
  });

  const args = parser.parse_args();
  generateApiKey(args.tenantId);
};

main();