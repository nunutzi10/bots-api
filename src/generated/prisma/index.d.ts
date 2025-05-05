
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model AIContext
 * 
 */
export type AIContext = $Result.DefaultSelection<Prisma.$AIContextPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Embedding
 * 
 */
export type Embedding = $Result.DefaultSelection<Prisma.$EmbeddingPayload>
/**
 * Model Completion
 * 
 */
export type Completion = $Result.DefaultSelection<Prisma.$CompletionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AIModel: {
  DEEPSEEK_CHAT: 'DEEPSEEK_CHAT',
  DEEPSEEK_REASONER: 'DEEPSEEK_REASONER'
};

export type AIModel = (typeof AIModel)[keyof typeof AIModel]

}

export type AIModel = $Enums.AIModel

export const AIModel: typeof $Enums.AIModel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIContext`: Exposes CRUD operations for the **AIContext** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIContexts
    * const aIContexts = await prisma.aIContext.findMany()
    * ```
    */
  get aIContext(): Prisma.AIContextDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.embedding`: Exposes CRUD operations for the **Embedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Embeddings
    * const embeddings = await prisma.embedding.findMany()
    * ```
    */
  get embedding(): Prisma.EmbeddingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completion`: Exposes CRUD operations for the **Completion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Completions
    * const completions = await prisma.completion.findMany()
    * ```
    */
  get completion(): Prisma.CompletionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    Admin: 'Admin',
    AIContext: 'AIContext',
    Conversation: 'Conversation',
    Embedding: 'Embedding',
    Completion: 'Completion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "admin" | "aIContext" | "conversation" | "embedding" | "completion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      AIContext: {
        payload: Prisma.$AIContextPayload<ExtArgs>
        fields: Prisma.AIContextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIContextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIContextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          findFirst: {
            args: Prisma.AIContextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIContextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          findMany: {
            args: Prisma.AIContextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>[]
          }
          create: {
            args: Prisma.AIContextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          createMany: {
            args: Prisma.AIContextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIContextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>[]
          }
          delete: {
            args: Prisma.AIContextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          update: {
            args: Prisma.AIContextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          deleteMany: {
            args: Prisma.AIContextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIContextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIContextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>[]
          }
          upsert: {
            args: Prisma.AIContextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextPayload>
          }
          aggregate: {
            args: Prisma.AIContextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIContext>
          }
          groupBy: {
            args: Prisma.AIContextGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIContextGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIContextCountArgs<ExtArgs>
            result: $Utils.Optional<AIContextCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Embedding: {
        payload: Prisma.$EmbeddingPayload<ExtArgs>
        fields: Prisma.EmbeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmbeddingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmbeddingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          findFirst: {
            args: Prisma.EmbeddingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmbeddingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          findMany: {
            args: Prisma.EmbeddingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>[]
          }
          create: {
            args: Prisma.EmbeddingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          createMany: {
            args: Prisma.EmbeddingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmbeddingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>[]
          }
          delete: {
            args: Prisma.EmbeddingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          update: {
            args: Prisma.EmbeddingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          deleteMany: {
            args: Prisma.EmbeddingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmbeddingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmbeddingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>[]
          }
          upsert: {
            args: Prisma.EmbeddingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmbeddingPayload>
          }
          aggregate: {
            args: Prisma.EmbeddingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmbedding>
          }
          groupBy: {
            args: Prisma.EmbeddingGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmbeddingGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmbeddingCountArgs<ExtArgs>
            result: $Utils.Optional<EmbeddingCountAggregateOutputType> | number
          }
        }
      }
      Completion: {
        payload: Prisma.$CompletionPayload<ExtArgs>
        fields: Prisma.CompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          findFirst: {
            args: Prisma.CompletionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          findMany: {
            args: Prisma.CompletionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>[]
          }
          create: {
            args: Prisma.CompletionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          createMany: {
            args: Prisma.CompletionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>[]
          }
          delete: {
            args: Prisma.CompletionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          update: {
            args: Prisma.CompletionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          deleteMany: {
            args: Prisma.CompletionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>[]
          }
          upsert: {
            args: Prisma.CompletionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletionPayload>
          }
          aggregate: {
            args: Prisma.CompletionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletion>
          }
          groupBy: {
            args: Prisma.CompletionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletionCountArgs<ExtArgs>
            result: $Utils.Optional<CompletionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    admin?: AdminOmit
    aIContext?: AIContextOmit
    conversation?: ConversationOmit
    embedding?: EmbeddingOmit
    completion?: CompletionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    admins: number
    ai_contexts: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | TenantCountOutputTypeCountAdminsArgs
    ai_contexts?: boolean | TenantCountOutputTypeCountAi_contextsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountAi_contextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIContextWhereInput
  }


  /**
   * Count Type AIContextCountOutputType
   */

  export type AIContextCountOutputType = {
    conversations: number
    embeddings: number
    completions: number
  }

  export type AIContextCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | AIContextCountOutputTypeCountConversationsArgs
    embeddings?: boolean | AIContextCountOutputTypeCountEmbeddingsArgs
    completions?: boolean | AIContextCountOutputTypeCountCompletionsArgs
  }

  // Custom InputTypes
  /**
   * AIContextCountOutputType without action
   */
  export type AIContextCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextCountOutputType
     */
    select?: AIContextCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AIContextCountOutputType without action
   */
  export type AIContextCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * AIContextCountOutputType without action
   */
  export type AIContextCountOutputTypeCountEmbeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbeddingWhereInput
  }

  /**
   * AIContextCountOutputType without action
   */
  export type AIContextCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletionWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    completions: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completions?: boolean | ConversationCountOutputTypeCountCompletionsArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    id: number | null
  }

  export type TenantSumAggregateOutputType = {
    id: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    id?: true
  }

  export type TenantSumAggregateInputType = {
    id?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admins?: boolean | Tenant$adminsArgs<ExtArgs>
    ai_contexts?: boolean | Tenant$ai_contextsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admins?: boolean | Tenant$adminsArgs<ExtArgs>
    ai_contexts?: boolean | Tenant$ai_contextsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      admins: Prisma.$AdminPayload<ExtArgs>[]
      ai_contexts: Prisma.$AIContextPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admins<T extends Tenant$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ai_contexts<T extends Tenant$ai_contextsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$ai_contextsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'Int'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.admins
   */
  export type Tenant$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Tenant.ai_contexts
   */
  export type Tenant$ai_contextsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    where?: AIContextWhereInput
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    cursor?: AIContextWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIContextScalarFieldEnum | AIContextScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    tenantId: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    tenantId: number | null
    email: string | null
    password: string | null
    googleId: string | null
    resetToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    tenantId: number | null
    email: string | null
    password: string | null
    googleId: string | null
    resetToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    tenantId: number
    email: number
    password: number
    googleId: number
    resetToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    tenantId?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    password?: true
    googleId?: true
    resetToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    password?: true
    googleId?: true
    resetToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    password?: true
    googleId?: true
    resetToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    tenantId: number
    email: string
    password: string | null
    googleId: string | null
    resetToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    tenantId?: boolean
    email?: boolean
    password?: boolean
    googleId?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "email" | "password" | "googleId" | "resetToken" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenantId: number
      email: string
      password: string | null
      googleId: string | null
      resetToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly tenantId: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly googleId: FieldRef<"Admin", 'String'>
    readonly resetToken: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model AIContext
   */

  export type AggregateAIContext = {
    _count: AIContextCountAggregateOutputType | null
    _avg: AIContextAvgAggregateOutputType | null
    _sum: AIContextSumAggregateOutputType | null
    _min: AIContextMinAggregateOutputType | null
    _max: AIContextMaxAggregateOutputType | null
  }

  export type AIContextAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
    temperature: number | null
  }

  export type AIContextSumAggregateOutputType = {
    id: number | null
    tenantId: number | null
    temperature: number | null
  }

  export type AIContextMinAggregateOutputType = {
    id: number | null
    tenantId: number | null
    name: string | null
    instructions: string | null
    temperature: number | null
    aiModel: $Enums.AIModel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIContextMaxAggregateOutputType = {
    id: number | null
    tenantId: number | null
    name: string | null
    instructions: string | null
    temperature: number | null
    aiModel: $Enums.AIModel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIContextCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    instructions: number
    temperature: number
    aiModel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIContextAvgAggregateInputType = {
    id?: true
    tenantId?: true
    temperature?: true
  }

  export type AIContextSumAggregateInputType = {
    id?: true
    tenantId?: true
    temperature?: true
  }

  export type AIContextMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    instructions?: true
    temperature?: true
    aiModel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIContextMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    instructions?: true
    temperature?: true
    aiModel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIContextCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    instructions?: true
    temperature?: true
    aiModel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIContextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIContext to aggregate.
     */
    where?: AIContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContexts to fetch.
     */
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIContexts
    **/
    _count?: true | AIContextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIContextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIContextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIContextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIContextMaxAggregateInputType
  }

  export type GetAIContextAggregateType<T extends AIContextAggregateArgs> = {
        [P in keyof T & keyof AggregateAIContext]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIContext[P]>
      : GetScalarType<T[P], AggregateAIContext[P]>
  }




  export type AIContextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIContextWhereInput
    orderBy?: AIContextOrderByWithAggregationInput | AIContextOrderByWithAggregationInput[]
    by: AIContextScalarFieldEnum[] | AIContextScalarFieldEnum
    having?: AIContextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIContextCountAggregateInputType | true
    _avg?: AIContextAvgAggregateInputType
    _sum?: AIContextSumAggregateInputType
    _min?: AIContextMinAggregateInputType
    _max?: AIContextMaxAggregateInputType
  }

  export type AIContextGroupByOutputType = {
    id: number
    tenantId: number
    name: string
    instructions: string | null
    temperature: number
    aiModel: $Enums.AIModel
    createdAt: Date
    updatedAt: Date
    _count: AIContextCountAggregateOutputType | null
    _avg: AIContextAvgAggregateOutputType | null
    _sum: AIContextSumAggregateOutputType | null
    _min: AIContextMinAggregateOutputType | null
    _max: AIContextMaxAggregateOutputType | null
  }

  type GetAIContextGroupByPayload<T extends AIContextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIContextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIContextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIContextGroupByOutputType[P]>
            : GetScalarType<T[P], AIContextGroupByOutputType[P]>
        }
      >
    >


  export type AIContextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    instructions?: boolean
    temperature?: boolean
    aiModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    conversations?: boolean | AIContext$conversationsArgs<ExtArgs>
    embeddings?: boolean | AIContext$embeddingsArgs<ExtArgs>
    completions?: boolean | AIContext$completionsArgs<ExtArgs>
    _count?: boolean | AIContextCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIContext"]>

  export type AIContextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    instructions?: boolean
    temperature?: boolean
    aiModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIContext"]>

  export type AIContextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    instructions?: boolean
    temperature?: boolean
    aiModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIContext"]>

  export type AIContextSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    instructions?: boolean
    temperature?: boolean
    aiModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIContextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "instructions" | "temperature" | "aiModel" | "createdAt" | "updatedAt", ExtArgs["result"]["aIContext"]>
  export type AIContextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    conversations?: boolean | AIContext$conversationsArgs<ExtArgs>
    embeddings?: boolean | AIContext$embeddingsArgs<ExtArgs>
    completions?: boolean | AIContext$completionsArgs<ExtArgs>
    _count?: boolean | AIContextCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AIContextIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type AIContextIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $AIContextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIContext"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      embeddings: Prisma.$EmbeddingPayload<ExtArgs>[]
      completions: Prisma.$CompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenantId: number
      name: string
      instructions: string | null
      temperature: number
      aiModel: $Enums.AIModel
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIContext"]>
    composites: {}
  }

  type AIContextGetPayload<S extends boolean | null | undefined | AIContextDefaultArgs> = $Result.GetResult<Prisma.$AIContextPayload, S>

  type AIContextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIContextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIContextCountAggregateInputType | true
    }

  export interface AIContextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIContext'], meta: { name: 'AIContext' } }
    /**
     * Find zero or one AIContext that matches the filter.
     * @param {AIContextFindUniqueArgs} args - Arguments to find a AIContext
     * @example
     * // Get one AIContext
     * const aIContext = await prisma.aIContext.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIContextFindUniqueArgs>(args: SelectSubset<T, AIContextFindUniqueArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIContext that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIContextFindUniqueOrThrowArgs} args - Arguments to find a AIContext
     * @example
     * // Get one AIContext
     * const aIContext = await prisma.aIContext.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIContextFindUniqueOrThrowArgs>(args: SelectSubset<T, AIContextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIContext that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextFindFirstArgs} args - Arguments to find a AIContext
     * @example
     * // Get one AIContext
     * const aIContext = await prisma.aIContext.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIContextFindFirstArgs>(args?: SelectSubset<T, AIContextFindFirstArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIContext that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextFindFirstOrThrowArgs} args - Arguments to find a AIContext
     * @example
     * // Get one AIContext
     * const aIContext = await prisma.aIContext.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIContextFindFirstOrThrowArgs>(args?: SelectSubset<T, AIContextFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIContexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIContexts
     * const aIContexts = await prisma.aIContext.findMany()
     * 
     * // Get first 10 AIContexts
     * const aIContexts = await prisma.aIContext.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIContextWithIdOnly = await prisma.aIContext.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIContextFindManyArgs>(args?: SelectSubset<T, AIContextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIContext.
     * @param {AIContextCreateArgs} args - Arguments to create a AIContext.
     * @example
     * // Create one AIContext
     * const AIContext = await prisma.aIContext.create({
     *   data: {
     *     // ... data to create a AIContext
     *   }
     * })
     * 
     */
    create<T extends AIContextCreateArgs>(args: SelectSubset<T, AIContextCreateArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIContexts.
     * @param {AIContextCreateManyArgs} args - Arguments to create many AIContexts.
     * @example
     * // Create many AIContexts
     * const aIContext = await prisma.aIContext.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIContextCreateManyArgs>(args?: SelectSubset<T, AIContextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIContexts and returns the data saved in the database.
     * @param {AIContextCreateManyAndReturnArgs} args - Arguments to create many AIContexts.
     * @example
     * // Create many AIContexts
     * const aIContext = await prisma.aIContext.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIContexts and only return the `id`
     * const aIContextWithIdOnly = await prisma.aIContext.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIContextCreateManyAndReturnArgs>(args?: SelectSubset<T, AIContextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIContext.
     * @param {AIContextDeleteArgs} args - Arguments to delete one AIContext.
     * @example
     * // Delete one AIContext
     * const AIContext = await prisma.aIContext.delete({
     *   where: {
     *     // ... filter to delete one AIContext
     *   }
     * })
     * 
     */
    delete<T extends AIContextDeleteArgs>(args: SelectSubset<T, AIContextDeleteArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIContext.
     * @param {AIContextUpdateArgs} args - Arguments to update one AIContext.
     * @example
     * // Update one AIContext
     * const aIContext = await prisma.aIContext.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIContextUpdateArgs>(args: SelectSubset<T, AIContextUpdateArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIContexts.
     * @param {AIContextDeleteManyArgs} args - Arguments to filter AIContexts to delete.
     * @example
     * // Delete a few AIContexts
     * const { count } = await prisma.aIContext.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIContextDeleteManyArgs>(args?: SelectSubset<T, AIContextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIContexts
     * const aIContext = await prisma.aIContext.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIContextUpdateManyArgs>(args: SelectSubset<T, AIContextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIContexts and returns the data updated in the database.
     * @param {AIContextUpdateManyAndReturnArgs} args - Arguments to update many AIContexts.
     * @example
     * // Update many AIContexts
     * const aIContext = await prisma.aIContext.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIContexts and only return the `id`
     * const aIContextWithIdOnly = await prisma.aIContext.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIContextUpdateManyAndReturnArgs>(args: SelectSubset<T, AIContextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIContext.
     * @param {AIContextUpsertArgs} args - Arguments to update or create a AIContext.
     * @example
     * // Update or create a AIContext
     * const aIContext = await prisma.aIContext.upsert({
     *   create: {
     *     // ... data to create a AIContext
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIContext we want to update
     *   }
     * })
     */
    upsert<T extends AIContextUpsertArgs>(args: SelectSubset<T, AIContextUpsertArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIContexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextCountArgs} args - Arguments to filter AIContexts to count.
     * @example
     * // Count the number of AIContexts
     * const count = await prisma.aIContext.count({
     *   where: {
     *     // ... the filter for the AIContexts we want to count
     *   }
     * })
    **/
    count<T extends AIContextCountArgs>(
      args?: Subset<T, AIContextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIContextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIContextAggregateArgs>(args: Subset<T, AIContextAggregateArgs>): Prisma.PrismaPromise<GetAIContextAggregateType<T>>

    /**
     * Group by AIContext.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIContextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIContextGroupByArgs['orderBy'] }
        : { orderBy?: AIContextGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIContextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIContextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIContext model
   */
  readonly fields: AIContextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIContext.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIContextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversations<T extends AIContext$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, AIContext$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    embeddings<T extends AIContext$embeddingsArgs<ExtArgs> = {}>(args?: Subset<T, AIContext$embeddingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    completions<T extends AIContext$completionsArgs<ExtArgs> = {}>(args?: Subset<T, AIContext$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIContext model
   */
  interface AIContextFieldRefs {
    readonly id: FieldRef<"AIContext", 'Int'>
    readonly tenantId: FieldRef<"AIContext", 'Int'>
    readonly name: FieldRef<"AIContext", 'String'>
    readonly instructions: FieldRef<"AIContext", 'String'>
    readonly temperature: FieldRef<"AIContext", 'Float'>
    readonly aiModel: FieldRef<"AIContext", 'AIModel'>
    readonly createdAt: FieldRef<"AIContext", 'DateTime'>
    readonly updatedAt: FieldRef<"AIContext", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIContext findUnique
   */
  export type AIContextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContext to fetch.
     */
    where: AIContextWhereUniqueInput
  }

  /**
   * AIContext findUniqueOrThrow
   */
  export type AIContextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContext to fetch.
     */
    where: AIContextWhereUniqueInput
  }

  /**
   * AIContext findFirst
   */
  export type AIContextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContext to fetch.
     */
    where?: AIContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContexts to fetch.
     */
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIContexts.
     */
    cursor?: AIContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIContexts.
     */
    distinct?: AIContextScalarFieldEnum | AIContextScalarFieldEnum[]
  }

  /**
   * AIContext findFirstOrThrow
   */
  export type AIContextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContext to fetch.
     */
    where?: AIContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContexts to fetch.
     */
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIContexts.
     */
    cursor?: AIContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIContexts.
     */
    distinct?: AIContextScalarFieldEnum | AIContextScalarFieldEnum[]
  }

  /**
   * AIContext findMany
   */
  export type AIContextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter, which AIContexts to fetch.
     */
    where?: AIContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContexts to fetch.
     */
    orderBy?: AIContextOrderByWithRelationInput | AIContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIContexts.
     */
    cursor?: AIContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContexts.
     */
    skip?: number
    distinct?: AIContextScalarFieldEnum | AIContextScalarFieldEnum[]
  }

  /**
   * AIContext create
   */
  export type AIContextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * The data needed to create a AIContext.
     */
    data: XOR<AIContextCreateInput, AIContextUncheckedCreateInput>
  }

  /**
   * AIContext createMany
   */
  export type AIContextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIContexts.
     */
    data: AIContextCreateManyInput | AIContextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIContext createManyAndReturn
   */
  export type AIContextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * The data used to create many AIContexts.
     */
    data: AIContextCreateManyInput | AIContextCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIContext update
   */
  export type AIContextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * The data needed to update a AIContext.
     */
    data: XOR<AIContextUpdateInput, AIContextUncheckedUpdateInput>
    /**
     * Choose, which AIContext to update.
     */
    where: AIContextWhereUniqueInput
  }

  /**
   * AIContext updateMany
   */
  export type AIContextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIContexts.
     */
    data: XOR<AIContextUpdateManyMutationInput, AIContextUncheckedUpdateManyInput>
    /**
     * Filter which AIContexts to update
     */
    where?: AIContextWhereInput
    /**
     * Limit how many AIContexts to update.
     */
    limit?: number
  }

  /**
   * AIContext updateManyAndReturn
   */
  export type AIContextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * The data used to update AIContexts.
     */
    data: XOR<AIContextUpdateManyMutationInput, AIContextUncheckedUpdateManyInput>
    /**
     * Filter which AIContexts to update
     */
    where?: AIContextWhereInput
    /**
     * Limit how many AIContexts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIContext upsert
   */
  export type AIContextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * The filter to search for the AIContext to update in case it exists.
     */
    where: AIContextWhereUniqueInput
    /**
     * In case the AIContext found by the `where` argument doesn't exist, create a new AIContext with this data.
     */
    create: XOR<AIContextCreateInput, AIContextUncheckedCreateInput>
    /**
     * In case the AIContext was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIContextUpdateInput, AIContextUncheckedUpdateInput>
  }

  /**
   * AIContext delete
   */
  export type AIContextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
    /**
     * Filter which AIContext to delete.
     */
    where: AIContextWhereUniqueInput
  }

  /**
   * AIContext deleteMany
   */
  export type AIContextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIContexts to delete
     */
    where?: AIContextWhereInput
    /**
     * Limit how many AIContexts to delete.
     */
    limit?: number
  }

  /**
   * AIContext.conversations
   */
  export type AIContext$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * AIContext.embeddings
   */
  export type AIContext$embeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    where?: EmbeddingWhereInput
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    cursor?: EmbeddingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * AIContext.completions
   */
  export type AIContext$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    where?: CompletionWhereInput
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    cursor?: CompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * AIContext without action
   */
  export type AIContextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContext
     */
    select?: AIContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContext
     */
    omit?: AIContextOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
    aiContextId: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
    aiContextId: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    aiContextId: number | null
    requesterMsisdn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    aiContextId: number | null
    requesterMsisdn: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    aiContextId: number
    requesterMsisdn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
    aiContextId?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
    aiContextId?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    aiContextId?: true
    requesterMsisdn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    aiContextId?: true
    requesterMsisdn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    aiContextId?: true
    requesterMsisdn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: number
    aiContextId: number
    requesterMsisdn: string
    createdAt: Date
    updatedAt: Date
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiContextId?: boolean
    requesterMsisdn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
    completions?: boolean | Conversation$completionsArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiContextId?: boolean
    requesterMsisdn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiContextId?: boolean
    requesterMsisdn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    aiContextId?: boolean
    requesterMsisdn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aiContextId" | "requesterMsisdn" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
    completions?: boolean | Conversation$completionsArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      aiContext: Prisma.$AIContextPayload<ExtArgs>
      completions: Prisma.$CompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aiContextId: number
      requesterMsisdn: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiContext<T extends AIContextDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AIContextDefaultArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completions<T extends Conversation$completionsArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$completionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'Int'>
    readonly aiContextId: FieldRef<"Conversation", 'Int'>
    readonly requesterMsisdn: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.completions
   */
  export type Conversation$completionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    where?: CompletionWhereInput
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    cursor?: CompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Embedding
   */

  export type AggregateEmbedding = {
    _count: EmbeddingCountAggregateOutputType | null
    _avg: EmbeddingAvgAggregateOutputType | null
    _sum: EmbeddingSumAggregateOutputType | null
    _min: EmbeddingMinAggregateOutputType | null
    _max: EmbeddingMaxAggregateOutputType | null
  }

  export type EmbeddingAvgAggregateOutputType = {
    id: number | null
    aiContextId: number | null
  }

  export type EmbeddingSumAggregateOutputType = {
    id: number | null
    aiContextId: number | null
  }

  export type EmbeddingMinAggregateOutputType = {
    id: number | null
    aiContextId: number | null
    content: string | null
  }

  export type EmbeddingMaxAggregateOutputType = {
    id: number | null
    aiContextId: number | null
    content: string | null
  }

  export type EmbeddingCountAggregateOutputType = {
    id: number
    aiContextId: number
    content: number
    _all: number
  }


  export type EmbeddingAvgAggregateInputType = {
    id?: true
    aiContextId?: true
  }

  export type EmbeddingSumAggregateInputType = {
    id?: true
    aiContextId?: true
  }

  export type EmbeddingMinAggregateInputType = {
    id?: true
    aiContextId?: true
    content?: true
  }

  export type EmbeddingMaxAggregateInputType = {
    id?: true
    aiContextId?: true
    content?: true
  }

  export type EmbeddingCountAggregateInputType = {
    id?: true
    aiContextId?: true
    content?: true
    _all?: true
  }

  export type EmbeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Embedding to aggregate.
     */
    where?: EmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeddings to fetch.
     */
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Embeddings
    **/
    _count?: true | EmbeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmbeddingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmbeddingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmbeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmbeddingMaxAggregateInputType
  }

  export type GetEmbeddingAggregateType<T extends EmbeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateEmbedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmbedding[P]>
      : GetScalarType<T[P], AggregateEmbedding[P]>
  }




  export type EmbeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmbeddingWhereInput
    orderBy?: EmbeddingOrderByWithAggregationInput | EmbeddingOrderByWithAggregationInput[]
    by: EmbeddingScalarFieldEnum[] | EmbeddingScalarFieldEnum
    having?: EmbeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmbeddingCountAggregateInputType | true
    _avg?: EmbeddingAvgAggregateInputType
    _sum?: EmbeddingSumAggregateInputType
    _min?: EmbeddingMinAggregateInputType
    _max?: EmbeddingMaxAggregateInputType
  }

  export type EmbeddingGroupByOutputType = {
    id: number
    aiContextId: number
    content: string
    _count: EmbeddingCountAggregateOutputType | null
    _avg: EmbeddingAvgAggregateOutputType | null
    _sum: EmbeddingSumAggregateOutputType | null
    _min: EmbeddingMinAggregateOutputType | null
    _max: EmbeddingMaxAggregateOutputType | null
  }

  type GetEmbeddingGroupByPayload<T extends EmbeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmbeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmbeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmbeddingGroupByOutputType[P]>
            : GetScalarType<T[P], EmbeddingGroupByOutputType[P]>
        }
      >
    >


  export type EmbeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiContextId?: boolean
    content?: boolean
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embedding"]>

  export type EmbeddingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiContextId?: boolean
    content?: boolean
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embedding"]>

  export type EmbeddingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiContextId?: boolean
    content?: boolean
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["embedding"]>

  export type EmbeddingSelectScalar = {
    id?: boolean
    aiContextId?: boolean
    content?: boolean
  }

  export type EmbeddingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aiContextId" | "content", ExtArgs["result"]["embedding"]>
  export type EmbeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }
  export type EmbeddingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }
  export type EmbeddingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
  }

  export type $EmbeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Embedding"
    objects: {
      aiContext: Prisma.$AIContextPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aiContextId: number
      content: string
    }, ExtArgs["result"]["embedding"]>
    composites: {}
  }

  type EmbeddingGetPayload<S extends boolean | null | undefined | EmbeddingDefaultArgs> = $Result.GetResult<Prisma.$EmbeddingPayload, S>

  type EmbeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmbeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmbeddingCountAggregateInputType | true
    }

  export interface EmbeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Embedding'], meta: { name: 'Embedding' } }
    /**
     * Find zero or one Embedding that matches the filter.
     * @param {EmbeddingFindUniqueArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmbeddingFindUniqueArgs>(args: SelectSubset<T, EmbeddingFindUniqueArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Embedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmbeddingFindUniqueOrThrowArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmbeddingFindUniqueOrThrowArgs>(args: SelectSubset<T, EmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Embedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingFindFirstArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmbeddingFindFirstArgs>(args?: SelectSubset<T, EmbeddingFindFirstArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Embedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingFindFirstOrThrowArgs} args - Arguments to find a Embedding
     * @example
     * // Get one Embedding
     * const embedding = await prisma.embedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmbeddingFindFirstOrThrowArgs>(args?: SelectSubset<T, EmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Embeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Embeddings
     * const embeddings = await prisma.embedding.findMany()
     * 
     * // Get first 10 Embeddings
     * const embeddings = await prisma.embedding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const embeddingWithIdOnly = await prisma.embedding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmbeddingFindManyArgs>(args?: SelectSubset<T, EmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Embedding.
     * @param {EmbeddingCreateArgs} args - Arguments to create a Embedding.
     * @example
     * // Create one Embedding
     * const Embedding = await prisma.embedding.create({
     *   data: {
     *     // ... data to create a Embedding
     *   }
     * })
     * 
     */
    create<T extends EmbeddingCreateArgs>(args: SelectSubset<T, EmbeddingCreateArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Embeddings.
     * @param {EmbeddingCreateManyArgs} args - Arguments to create many Embeddings.
     * @example
     * // Create many Embeddings
     * const embedding = await prisma.embedding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmbeddingCreateManyArgs>(args?: SelectSubset<T, EmbeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Embeddings and returns the data saved in the database.
     * @param {EmbeddingCreateManyAndReturnArgs} args - Arguments to create many Embeddings.
     * @example
     * // Create many Embeddings
     * const embedding = await prisma.embedding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Embeddings and only return the `id`
     * const embeddingWithIdOnly = await prisma.embedding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmbeddingCreateManyAndReturnArgs>(args?: SelectSubset<T, EmbeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Embedding.
     * @param {EmbeddingDeleteArgs} args - Arguments to delete one Embedding.
     * @example
     * // Delete one Embedding
     * const Embedding = await prisma.embedding.delete({
     *   where: {
     *     // ... filter to delete one Embedding
     *   }
     * })
     * 
     */
    delete<T extends EmbeddingDeleteArgs>(args: SelectSubset<T, EmbeddingDeleteArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Embedding.
     * @param {EmbeddingUpdateArgs} args - Arguments to update one Embedding.
     * @example
     * // Update one Embedding
     * const embedding = await prisma.embedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmbeddingUpdateArgs>(args: SelectSubset<T, EmbeddingUpdateArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Embeddings.
     * @param {EmbeddingDeleteManyArgs} args - Arguments to filter Embeddings to delete.
     * @example
     * // Delete a few Embeddings
     * const { count } = await prisma.embedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmbeddingDeleteManyArgs>(args?: SelectSubset<T, EmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Embeddings
     * const embedding = await prisma.embedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmbeddingUpdateManyArgs>(args: SelectSubset<T, EmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Embeddings and returns the data updated in the database.
     * @param {EmbeddingUpdateManyAndReturnArgs} args - Arguments to update many Embeddings.
     * @example
     * // Update many Embeddings
     * const embedding = await prisma.embedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Embeddings and only return the `id`
     * const embeddingWithIdOnly = await prisma.embedding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmbeddingUpdateManyAndReturnArgs>(args: SelectSubset<T, EmbeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Embedding.
     * @param {EmbeddingUpsertArgs} args - Arguments to update or create a Embedding.
     * @example
     * // Update or create a Embedding
     * const embedding = await prisma.embedding.upsert({
     *   create: {
     *     // ... data to create a Embedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Embedding we want to update
     *   }
     * })
     */
    upsert<T extends EmbeddingUpsertArgs>(args: SelectSubset<T, EmbeddingUpsertArgs<ExtArgs>>): Prisma__EmbeddingClient<$Result.GetResult<Prisma.$EmbeddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Embeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingCountArgs} args - Arguments to filter Embeddings to count.
     * @example
     * // Count the number of Embeddings
     * const count = await prisma.embedding.count({
     *   where: {
     *     // ... the filter for the Embeddings we want to count
     *   }
     * })
    **/
    count<T extends EmbeddingCountArgs>(
      args?: Subset<T, EmbeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmbeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Embedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmbeddingAggregateArgs>(args: Subset<T, EmbeddingAggregateArgs>): Prisma.PrismaPromise<GetEmbeddingAggregateType<T>>

    /**
     * Group by Embedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmbeddingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmbeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmbeddingGroupByArgs['orderBy'] }
        : { orderBy?: EmbeddingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Embedding model
   */
  readonly fields: EmbeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Embedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmbeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiContext<T extends AIContextDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AIContextDefaultArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Embedding model
   */
  interface EmbeddingFieldRefs {
    readonly id: FieldRef<"Embedding", 'Int'>
    readonly aiContextId: FieldRef<"Embedding", 'Int'>
    readonly content: FieldRef<"Embedding", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Embedding findUnique
   */
  export type EmbeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embedding to fetch.
     */
    where: EmbeddingWhereUniqueInput
  }

  /**
   * Embedding findUniqueOrThrow
   */
  export type EmbeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embedding to fetch.
     */
    where: EmbeddingWhereUniqueInput
  }

  /**
   * Embedding findFirst
   */
  export type EmbeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embedding to fetch.
     */
    where?: EmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeddings to fetch.
     */
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Embeddings.
     */
    cursor?: EmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Embeddings.
     */
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * Embedding findFirstOrThrow
   */
  export type EmbeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embedding to fetch.
     */
    where?: EmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeddings to fetch.
     */
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Embeddings.
     */
    cursor?: EmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Embeddings.
     */
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * Embedding findMany
   */
  export type EmbeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which Embeddings to fetch.
     */
    where?: EmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Embeddings to fetch.
     */
    orderBy?: EmbeddingOrderByWithRelationInput | EmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Embeddings.
     */
    cursor?: EmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Embeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Embeddings.
     */
    skip?: number
    distinct?: EmbeddingScalarFieldEnum | EmbeddingScalarFieldEnum[]
  }

  /**
   * Embedding create
   */
  export type EmbeddingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to create a Embedding.
     */
    data: XOR<EmbeddingCreateInput, EmbeddingUncheckedCreateInput>
  }

  /**
   * Embedding createMany
   */
  export type EmbeddingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Embeddings.
     */
    data: EmbeddingCreateManyInput | EmbeddingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Embedding createManyAndReturn
   */
  export type EmbeddingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * The data used to create many Embeddings.
     */
    data: EmbeddingCreateManyInput | EmbeddingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Embedding update
   */
  export type EmbeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a Embedding.
     */
    data: XOR<EmbeddingUpdateInput, EmbeddingUncheckedUpdateInput>
    /**
     * Choose, which Embedding to update.
     */
    where: EmbeddingWhereUniqueInput
  }

  /**
   * Embedding updateMany
   */
  export type EmbeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Embeddings.
     */
    data: XOR<EmbeddingUpdateManyMutationInput, EmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which Embeddings to update
     */
    where?: EmbeddingWhereInput
    /**
     * Limit how many Embeddings to update.
     */
    limit?: number
  }

  /**
   * Embedding updateManyAndReturn
   */
  export type EmbeddingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * The data used to update Embeddings.
     */
    data: XOR<EmbeddingUpdateManyMutationInput, EmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which Embeddings to update
     */
    where?: EmbeddingWhereInput
    /**
     * Limit how many Embeddings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Embedding upsert
   */
  export type EmbeddingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * The filter to search for the Embedding to update in case it exists.
     */
    where: EmbeddingWhereUniqueInput
    /**
     * In case the Embedding found by the `where` argument doesn't exist, create a new Embedding with this data.
     */
    create: XOR<EmbeddingCreateInput, EmbeddingUncheckedCreateInput>
    /**
     * In case the Embedding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmbeddingUpdateInput, EmbeddingUncheckedUpdateInput>
  }

  /**
   * Embedding delete
   */
  export type EmbeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
    /**
     * Filter which Embedding to delete.
     */
    where: EmbeddingWhereUniqueInput
  }

  /**
   * Embedding deleteMany
   */
  export type EmbeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Embeddings to delete
     */
    where?: EmbeddingWhereInput
    /**
     * Limit how many Embeddings to delete.
     */
    limit?: number
  }

  /**
   * Embedding without action
   */
  export type EmbeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Embedding
     */
    select?: EmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Embedding
     */
    omit?: EmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmbeddingInclude<ExtArgs> | null
  }


  /**
   * Model Completion
   */

  export type AggregateCompletion = {
    _count: CompletionCountAggregateOutputType | null
    _avg: CompletionAvgAggregateOutputType | null
    _sum: CompletionSumAggregateOutputType | null
    _min: CompletionMinAggregateOutputType | null
    _max: CompletionMaxAggregateOutputType | null
  }

  export type CompletionAvgAggregateOutputType = {
    id: number | null
    aiContextId: number | null
    conversationId: number | null
  }

  export type CompletionSumAggregateOutputType = {
    id: number | null
    aiContextId: number | null
    conversationId: number | null
  }

  export type CompletionMinAggregateOutputType = {
    id: number | null
    aiContextId: number | null
    conversationId: number | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompletionMaxAggregateOutputType = {
    id: number | null
    aiContextId: number | null
    conversationId: number | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompletionCountAggregateOutputType = {
    id: number
    aiContextId: number
    conversationId: number
    prompt: number
    response: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompletionAvgAggregateInputType = {
    id?: true
    aiContextId?: true
    conversationId?: true
  }

  export type CompletionSumAggregateInputType = {
    id?: true
    aiContextId?: true
    conversationId?: true
  }

  export type CompletionMinAggregateInputType = {
    id?: true
    aiContextId?: true
    conversationId?: true
    prompt?: true
    response?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompletionMaxAggregateInputType = {
    id?: true
    aiContextId?: true
    conversationId?: true
    prompt?: true
    response?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompletionCountAggregateInputType = {
    id?: true
    aiContextId?: true
    conversationId?: true
    prompt?: true
    response?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Completion to aggregate.
     */
    where?: CompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completions to fetch.
     */
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Completions
    **/
    _count?: true | CompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletionMaxAggregateInputType
  }

  export type GetCompletionAggregateType<T extends CompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletion[P]>
      : GetScalarType<T[P], AggregateCompletion[P]>
  }




  export type CompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletionWhereInput
    orderBy?: CompletionOrderByWithAggregationInput | CompletionOrderByWithAggregationInput[]
    by: CompletionScalarFieldEnum[] | CompletionScalarFieldEnum
    having?: CompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletionCountAggregateInputType | true
    _avg?: CompletionAvgAggregateInputType
    _sum?: CompletionSumAggregateInputType
    _min?: CompletionMinAggregateInputType
    _max?: CompletionMaxAggregateInputType
  }

  export type CompletionGroupByOutputType = {
    id: number
    aiContextId: number
    conversationId: number | null
    prompt: string
    response: string
    createdAt: Date
    updatedAt: Date
    _count: CompletionCountAggregateOutputType | null
    _avg: CompletionAvgAggregateOutputType | null
    _sum: CompletionSumAggregateOutputType | null
    _min: CompletionMinAggregateOutputType | null
    _max: CompletionMaxAggregateOutputType | null
  }

  type GetCompletionGroupByPayload<T extends CompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletionGroupByOutputType[P]>
            : GetScalarType<T[P], CompletionGroupByOutputType[P]>
        }
      >
    >


  export type CompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiContextId?: boolean
    conversationId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
    conversation?: boolean | Completion$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["completion"]>

  export type CompletionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiContextId?: boolean
    conversationId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
    conversation?: boolean | Completion$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["completion"]>

  export type CompletionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiContextId?: boolean
    conversationId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
    conversation?: boolean | Completion$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["completion"]>

  export type CompletionSelectScalar = {
    id?: boolean
    aiContextId?: boolean
    conversationId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompletionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aiContextId" | "conversationId" | "prompt" | "response" | "createdAt" | "updatedAt", ExtArgs["result"]["completion"]>
  export type CompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
    conversation?: boolean | Completion$conversationArgs<ExtArgs>
  }
  export type CompletionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
    conversation?: boolean | Completion$conversationArgs<ExtArgs>
  }
  export type CompletionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiContext?: boolean | AIContextDefaultArgs<ExtArgs>
    conversation?: boolean | Completion$conversationArgs<ExtArgs>
  }

  export type $CompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Completion"
    objects: {
      aiContext: Prisma.$AIContextPayload<ExtArgs>
      conversation: Prisma.$ConversationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aiContextId: number
      conversationId: number | null
      prompt: string
      response: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["completion"]>
    composites: {}
  }

  type CompletionGetPayload<S extends boolean | null | undefined | CompletionDefaultArgs> = $Result.GetResult<Prisma.$CompletionPayload, S>

  type CompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletionCountAggregateInputType | true
    }

  export interface CompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Completion'], meta: { name: 'Completion' } }
    /**
     * Find zero or one Completion that matches the filter.
     * @param {CompletionFindUniqueArgs} args - Arguments to find a Completion
     * @example
     * // Get one Completion
     * const completion = await prisma.completion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletionFindUniqueArgs>(args: SelectSubset<T, CompletionFindUniqueArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Completion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletionFindUniqueOrThrowArgs} args - Arguments to find a Completion
     * @example
     * // Get one Completion
     * const completion = await prisma.completion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Completion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionFindFirstArgs} args - Arguments to find a Completion
     * @example
     * // Get one Completion
     * const completion = await prisma.completion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletionFindFirstArgs>(args?: SelectSubset<T, CompletionFindFirstArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Completion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionFindFirstOrThrowArgs} args - Arguments to find a Completion
     * @example
     * // Get one Completion
     * const completion = await prisma.completion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Completions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Completions
     * const completions = await prisma.completion.findMany()
     * 
     * // Get first 10 Completions
     * const completions = await prisma.completion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completionWithIdOnly = await prisma.completion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletionFindManyArgs>(args?: SelectSubset<T, CompletionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Completion.
     * @param {CompletionCreateArgs} args - Arguments to create a Completion.
     * @example
     * // Create one Completion
     * const Completion = await prisma.completion.create({
     *   data: {
     *     // ... data to create a Completion
     *   }
     * })
     * 
     */
    create<T extends CompletionCreateArgs>(args: SelectSubset<T, CompletionCreateArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Completions.
     * @param {CompletionCreateManyArgs} args - Arguments to create many Completions.
     * @example
     * // Create many Completions
     * const completion = await prisma.completion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletionCreateManyArgs>(args?: SelectSubset<T, CompletionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Completions and returns the data saved in the database.
     * @param {CompletionCreateManyAndReturnArgs} args - Arguments to create many Completions.
     * @example
     * // Create many Completions
     * const completion = await prisma.completion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Completions and only return the `id`
     * const completionWithIdOnly = await prisma.completion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Completion.
     * @param {CompletionDeleteArgs} args - Arguments to delete one Completion.
     * @example
     * // Delete one Completion
     * const Completion = await prisma.completion.delete({
     *   where: {
     *     // ... filter to delete one Completion
     *   }
     * })
     * 
     */
    delete<T extends CompletionDeleteArgs>(args: SelectSubset<T, CompletionDeleteArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Completion.
     * @param {CompletionUpdateArgs} args - Arguments to update one Completion.
     * @example
     * // Update one Completion
     * const completion = await prisma.completion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletionUpdateArgs>(args: SelectSubset<T, CompletionUpdateArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Completions.
     * @param {CompletionDeleteManyArgs} args - Arguments to filter Completions to delete.
     * @example
     * // Delete a few Completions
     * const { count } = await prisma.completion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletionDeleteManyArgs>(args?: SelectSubset<T, CompletionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Completions
     * const completion = await prisma.completion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletionUpdateManyArgs>(args: SelectSubset<T, CompletionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Completions and returns the data updated in the database.
     * @param {CompletionUpdateManyAndReturnArgs} args - Arguments to update many Completions.
     * @example
     * // Update many Completions
     * const completion = await prisma.completion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Completions and only return the `id`
     * const completionWithIdOnly = await prisma.completion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompletionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Completion.
     * @param {CompletionUpsertArgs} args - Arguments to update or create a Completion.
     * @example
     * // Update or create a Completion
     * const completion = await prisma.completion.upsert({
     *   create: {
     *     // ... data to create a Completion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Completion we want to update
     *   }
     * })
     */
    upsert<T extends CompletionUpsertArgs>(args: SelectSubset<T, CompletionUpsertArgs<ExtArgs>>): Prisma__CompletionClient<$Result.GetResult<Prisma.$CompletionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Completions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionCountArgs} args - Arguments to filter Completions to count.
     * @example
     * // Count the number of Completions
     * const count = await prisma.completion.count({
     *   where: {
     *     // ... the filter for the Completions we want to count
     *   }
     * })
    **/
    count<T extends CompletionCountArgs>(
      args?: Subset<T, CompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Completion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletionAggregateArgs>(args: Subset<T, CompletionAggregateArgs>): Prisma.PrismaPromise<GetCompletionAggregateType<T>>

    /**
     * Group by Completion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletionGroupByArgs['orderBy'] }
        : { orderBy?: CompletionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Completion model
   */
  readonly fields: CompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Completion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiContext<T extends AIContextDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AIContextDefaultArgs<ExtArgs>>): Prisma__AIContextClient<$Result.GetResult<Prisma.$AIContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends Completion$conversationArgs<ExtArgs> = {}>(args?: Subset<T, Completion$conversationArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Completion model
   */
  interface CompletionFieldRefs {
    readonly id: FieldRef<"Completion", 'Int'>
    readonly aiContextId: FieldRef<"Completion", 'Int'>
    readonly conversationId: FieldRef<"Completion", 'Int'>
    readonly prompt: FieldRef<"Completion", 'String'>
    readonly response: FieldRef<"Completion", 'String'>
    readonly createdAt: FieldRef<"Completion", 'DateTime'>
    readonly updatedAt: FieldRef<"Completion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Completion findUnique
   */
  export type CompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completion to fetch.
     */
    where: CompletionWhereUniqueInput
  }

  /**
   * Completion findUniqueOrThrow
   */
  export type CompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completion to fetch.
     */
    where: CompletionWhereUniqueInput
  }

  /**
   * Completion findFirst
   */
  export type CompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completion to fetch.
     */
    where?: CompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completions to fetch.
     */
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Completions.
     */
    cursor?: CompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Completions.
     */
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * Completion findFirstOrThrow
   */
  export type CompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completion to fetch.
     */
    where?: CompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completions to fetch.
     */
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Completions.
     */
    cursor?: CompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Completions.
     */
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * Completion findMany
   */
  export type CompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter, which Completions to fetch.
     */
    where?: CompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Completions to fetch.
     */
    orderBy?: CompletionOrderByWithRelationInput | CompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Completions.
     */
    cursor?: CompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Completions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Completions.
     */
    skip?: number
    distinct?: CompletionScalarFieldEnum | CompletionScalarFieldEnum[]
  }

  /**
   * Completion create
   */
  export type CompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a Completion.
     */
    data: XOR<CompletionCreateInput, CompletionUncheckedCreateInput>
  }

  /**
   * Completion createMany
   */
  export type CompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Completions.
     */
    data: CompletionCreateManyInput | CompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Completion createManyAndReturn
   */
  export type CompletionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * The data used to create many Completions.
     */
    data: CompletionCreateManyInput | CompletionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Completion update
   */
  export type CompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a Completion.
     */
    data: XOR<CompletionUpdateInput, CompletionUncheckedUpdateInput>
    /**
     * Choose, which Completion to update.
     */
    where: CompletionWhereUniqueInput
  }

  /**
   * Completion updateMany
   */
  export type CompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Completions.
     */
    data: XOR<CompletionUpdateManyMutationInput, CompletionUncheckedUpdateManyInput>
    /**
     * Filter which Completions to update
     */
    where?: CompletionWhereInput
    /**
     * Limit how many Completions to update.
     */
    limit?: number
  }

  /**
   * Completion updateManyAndReturn
   */
  export type CompletionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * The data used to update Completions.
     */
    data: XOR<CompletionUpdateManyMutationInput, CompletionUncheckedUpdateManyInput>
    /**
     * Filter which Completions to update
     */
    where?: CompletionWhereInput
    /**
     * Limit how many Completions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Completion upsert
   */
  export type CompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the Completion to update in case it exists.
     */
    where: CompletionWhereUniqueInput
    /**
     * In case the Completion found by the `where` argument doesn't exist, create a new Completion with this data.
     */
    create: XOR<CompletionCreateInput, CompletionUncheckedCreateInput>
    /**
     * In case the Completion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletionUpdateInput, CompletionUncheckedUpdateInput>
  }

  /**
   * Completion delete
   */
  export type CompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
    /**
     * Filter which Completion to delete.
     */
    where: CompletionWhereUniqueInput
  }

  /**
   * Completion deleteMany
   */
  export type CompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Completions to delete
     */
    where?: CompletionWhereInput
    /**
     * Limit how many Completions to delete.
     */
    limit?: number
  }

  /**
   * Completion.conversation
   */
  export type Completion$conversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
  }

  /**
   * Completion without action
   */
  export type CompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Completion
     */
    select?: CompletionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Completion
     */
    omit?: CompletionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    password: 'password',
    googleId: 'googleId',
    resetToken: 'resetToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AIContextScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    instructions: 'instructions',
    temperature: 'temperature',
    aiModel: 'aiModel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIContextScalarFieldEnum = (typeof AIContextScalarFieldEnum)[keyof typeof AIContextScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    aiContextId: 'aiContextId',
    requesterMsisdn: 'requesterMsisdn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const EmbeddingScalarFieldEnum: {
    id: 'id',
    aiContextId: 'aiContextId',
    content: 'content'
  };

  export type EmbeddingScalarFieldEnum = (typeof EmbeddingScalarFieldEnum)[keyof typeof EmbeddingScalarFieldEnum]


  export const CompletionScalarFieldEnum: {
    id: 'id',
    aiContextId: 'aiContextId',
    conversationId: 'conversationId',
    prompt: 'prompt',
    response: 'response',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompletionScalarFieldEnum = (typeof CompletionScalarFieldEnum)[keyof typeof CompletionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AIModel'
   */
  export type EnumAIModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIModel'>
    


  /**
   * Reference to a field of type 'AIModel[]'
   */
  export type ListEnumAIModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIModel[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: IntFilter<"Tenant"> | number
    name?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    admins?: AdminListRelationFilter
    ai_contexts?: AIContextListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admins?: AdminOrderByRelationAggregateInput
    ai_contexts?: AIContextOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    admins?: AdminListRelationFilter
    ai_contexts?: AIContextListRelationFilter
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tenant"> | number
    name?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    tenantId?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringNullableFilter<"Admin"> | string | null
    googleId?: StringNullableFilter<"Admin"> | string | null
    resetToken?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    googleId?: string
    resetToken?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    tenantId?: IntFilter<"Admin"> | number
    password?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "email" | "googleId" | "resetToken">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    tenantId?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type AIContextWhereInput = {
    AND?: AIContextWhereInput | AIContextWhereInput[]
    OR?: AIContextWhereInput[]
    NOT?: AIContextWhereInput | AIContextWhereInput[]
    id?: IntFilter<"AIContext"> | number
    tenantId?: IntFilter<"AIContext"> | number
    name?: StringFilter<"AIContext"> | string
    instructions?: StringNullableFilter<"AIContext"> | string | null
    temperature?: FloatFilter<"AIContext"> | number
    aiModel?: EnumAIModelFilter<"AIContext"> | $Enums.AIModel
    createdAt?: DateTimeFilter<"AIContext"> | Date | string
    updatedAt?: DateTimeFilter<"AIContext"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    conversations?: ConversationListRelationFilter
    embeddings?: EmbeddingListRelationFilter
    completions?: CompletionListRelationFilter
  }

  export type AIContextOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    instructions?: SortOrderInput | SortOrder
    temperature?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    conversations?: ConversationOrderByRelationAggregateInput
    embeddings?: EmbeddingOrderByRelationAggregateInput
    completions?: CompletionOrderByRelationAggregateInput
  }

  export type AIContextWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AIContextWhereInput | AIContextWhereInput[]
    OR?: AIContextWhereInput[]
    NOT?: AIContextWhereInput | AIContextWhereInput[]
    tenantId?: IntFilter<"AIContext"> | number
    name?: StringFilter<"AIContext"> | string
    instructions?: StringNullableFilter<"AIContext"> | string | null
    temperature?: FloatFilter<"AIContext"> | number
    aiModel?: EnumAIModelFilter<"AIContext"> | $Enums.AIModel
    createdAt?: DateTimeFilter<"AIContext"> | Date | string
    updatedAt?: DateTimeFilter<"AIContext"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    conversations?: ConversationListRelationFilter
    embeddings?: EmbeddingListRelationFilter
    completions?: CompletionListRelationFilter
  }, "id">

  export type AIContextOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    instructions?: SortOrderInput | SortOrder
    temperature?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIContextCountOrderByAggregateInput
    _avg?: AIContextAvgOrderByAggregateInput
    _max?: AIContextMaxOrderByAggregateInput
    _min?: AIContextMinOrderByAggregateInput
    _sum?: AIContextSumOrderByAggregateInput
  }

  export type AIContextScalarWhereWithAggregatesInput = {
    AND?: AIContextScalarWhereWithAggregatesInput | AIContextScalarWhereWithAggregatesInput[]
    OR?: AIContextScalarWhereWithAggregatesInput[]
    NOT?: AIContextScalarWhereWithAggregatesInput | AIContextScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AIContext"> | number
    tenantId?: IntWithAggregatesFilter<"AIContext"> | number
    name?: StringWithAggregatesFilter<"AIContext"> | string
    instructions?: StringNullableWithAggregatesFilter<"AIContext"> | string | null
    temperature?: FloatWithAggregatesFilter<"AIContext"> | number
    aiModel?: EnumAIModelWithAggregatesFilter<"AIContext"> | $Enums.AIModel
    createdAt?: DateTimeWithAggregatesFilter<"AIContext"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIContext"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: IntFilter<"Conversation"> | number
    aiContextId?: IntFilter<"Conversation"> | number
    requesterMsisdn?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    aiContext?: XOR<AIContextScalarRelationFilter, AIContextWhereInput>
    completions?: CompletionListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    requesterMsisdn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiContext?: AIContextOrderByWithRelationInput
    completions?: CompletionOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    aiContextId?: IntFilter<"Conversation"> | number
    requesterMsisdn?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    aiContext?: XOR<AIContextScalarRelationFilter, AIContextWhereInput>
    completions?: CompletionListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    requesterMsisdn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversation"> | number
    aiContextId?: IntWithAggregatesFilter<"Conversation"> | number
    requesterMsisdn?: StringWithAggregatesFilter<"Conversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type EmbeddingWhereInput = {
    AND?: EmbeddingWhereInput | EmbeddingWhereInput[]
    OR?: EmbeddingWhereInput[]
    NOT?: EmbeddingWhereInput | EmbeddingWhereInput[]
    id?: IntFilter<"Embedding"> | number
    aiContextId?: IntFilter<"Embedding"> | number
    content?: StringFilter<"Embedding"> | string
    aiContext?: XOR<AIContextScalarRelationFilter, AIContextWhereInput>
  }

  export type EmbeddingOrderByWithRelationInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    content?: SortOrder
    aiContext?: AIContextOrderByWithRelationInput
  }

  export type EmbeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmbeddingWhereInput | EmbeddingWhereInput[]
    OR?: EmbeddingWhereInput[]
    NOT?: EmbeddingWhereInput | EmbeddingWhereInput[]
    aiContextId?: IntFilter<"Embedding"> | number
    content?: StringFilter<"Embedding"> | string
    aiContext?: XOR<AIContextScalarRelationFilter, AIContextWhereInput>
  }, "id">

  export type EmbeddingOrderByWithAggregationInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    content?: SortOrder
    _count?: EmbeddingCountOrderByAggregateInput
    _avg?: EmbeddingAvgOrderByAggregateInput
    _max?: EmbeddingMaxOrderByAggregateInput
    _min?: EmbeddingMinOrderByAggregateInput
    _sum?: EmbeddingSumOrderByAggregateInput
  }

  export type EmbeddingScalarWhereWithAggregatesInput = {
    AND?: EmbeddingScalarWhereWithAggregatesInput | EmbeddingScalarWhereWithAggregatesInput[]
    OR?: EmbeddingScalarWhereWithAggregatesInput[]
    NOT?: EmbeddingScalarWhereWithAggregatesInput | EmbeddingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Embedding"> | number
    aiContextId?: IntWithAggregatesFilter<"Embedding"> | number
    content?: StringWithAggregatesFilter<"Embedding"> | string
  }

  export type CompletionWhereInput = {
    AND?: CompletionWhereInput | CompletionWhereInput[]
    OR?: CompletionWhereInput[]
    NOT?: CompletionWhereInput | CompletionWhereInput[]
    id?: IntFilter<"Completion"> | number
    aiContextId?: IntFilter<"Completion"> | number
    conversationId?: IntNullableFilter<"Completion"> | number | null
    prompt?: StringFilter<"Completion"> | string
    response?: StringFilter<"Completion"> | string
    createdAt?: DateTimeFilter<"Completion"> | Date | string
    updatedAt?: DateTimeFilter<"Completion"> | Date | string
    aiContext?: XOR<AIContextScalarRelationFilter, AIContextWhereInput>
    conversation?: XOR<ConversationNullableScalarRelationFilter, ConversationWhereInput> | null
  }

  export type CompletionOrderByWithRelationInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiContext?: AIContextOrderByWithRelationInput
    conversation?: ConversationOrderByWithRelationInput
  }

  export type CompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompletionWhereInput | CompletionWhereInput[]
    OR?: CompletionWhereInput[]
    NOT?: CompletionWhereInput | CompletionWhereInput[]
    aiContextId?: IntFilter<"Completion"> | number
    conversationId?: IntNullableFilter<"Completion"> | number | null
    prompt?: StringFilter<"Completion"> | string
    response?: StringFilter<"Completion"> | string
    createdAt?: DateTimeFilter<"Completion"> | Date | string
    updatedAt?: DateTimeFilter<"Completion"> | Date | string
    aiContext?: XOR<AIContextScalarRelationFilter, AIContextWhereInput>
    conversation?: XOR<ConversationNullableScalarRelationFilter, ConversationWhereInput> | null
  }, "id">

  export type CompletionOrderByWithAggregationInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompletionCountOrderByAggregateInput
    _avg?: CompletionAvgOrderByAggregateInput
    _max?: CompletionMaxOrderByAggregateInput
    _min?: CompletionMinOrderByAggregateInput
    _sum?: CompletionSumOrderByAggregateInput
  }

  export type CompletionScalarWhereWithAggregatesInput = {
    AND?: CompletionScalarWhereWithAggregatesInput | CompletionScalarWhereWithAggregatesInput[]
    OR?: CompletionScalarWhereWithAggregatesInput[]
    NOT?: CompletionScalarWhereWithAggregatesInput | CompletionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Completion"> | number
    aiContextId?: IntWithAggregatesFilter<"Completion"> | number
    conversationId?: IntNullableWithAggregatesFilter<"Completion"> | number | null
    prompt?: StringWithAggregatesFilter<"Completion"> | string
    response?: StringWithAggregatesFilter<"Completion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Completion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Completion"> | Date | string
  }

  export type TenantCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminCreateNestedManyWithoutTenantInput
    ai_contexts?: AIContextCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminUncheckedCreateNestedManyWithoutTenantInput
    ai_contexts?: AIContextUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUpdateManyWithoutTenantNestedInput
    ai_contexts?: AIContextUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUncheckedUpdateManyWithoutTenantNestedInput
    ai_contexts?: AIContextUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    email: string
    password?: string | null
    googleId?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAdminsInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    tenantId: number
    email: string
    password?: string | null
    googleId?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    tenantId: number
    email: string
    password?: string | null
    googleId?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIContextCreateInput = {
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAi_contextsInput
    conversations?: ConversationCreateNestedManyWithoutAiContextInput
    embeddings?: EmbeddingCreateNestedManyWithoutAiContextInput
    completions?: CompletionCreateNestedManyWithoutAiContextInput
  }

  export type AIContextUncheckedCreateInput = {
    id?: number
    tenantId: number
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutAiContextInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutAiContextInput
    completions?: CompletionUncheckedCreateNestedManyWithoutAiContextInput
  }

  export type AIContextUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAi_contextsNestedInput
    conversations?: ConversationUpdateManyWithoutAiContextNestedInput
    embeddings?: EmbeddingUpdateManyWithoutAiContextNestedInput
    completions?: CompletionUpdateManyWithoutAiContextNestedInput
  }

  export type AIContextUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutAiContextNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutAiContextNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutAiContextNestedInput
  }

  export type AIContextCreateManyInput = {
    id?: number
    tenantId: number
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIContextUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIContextUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    requesterMsisdn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiContext: AIContextCreateNestedOneWithoutConversationsInput
    completions?: CompletionCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: number
    aiContextId: number
    requesterMsisdn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: CompletionUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    requesterMsisdn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiContext?: AIContextUpdateOneRequiredWithoutConversationsNestedInput
    completions?: CompletionUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiContextId?: IntFieldUpdateOperationsInput | number
    requesterMsisdn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: CompletionUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: number
    aiContextId: number
    requesterMsisdn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    requesterMsisdn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiContextId?: IntFieldUpdateOperationsInput | number
    requesterMsisdn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddingCreateInput = {
    content: string
    aiContext: AIContextCreateNestedOneWithoutEmbeddingsInput
  }

  export type EmbeddingUncheckedCreateInput = {
    id?: number
    aiContextId: number
    content: string
  }

  export type EmbeddingUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    aiContext?: AIContextUpdateOneRequiredWithoutEmbeddingsNestedInput
  }

  export type EmbeddingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiContextId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type EmbeddingCreateManyInput = {
    id?: number
    aiContextId: number
    content: string
  }

  export type EmbeddingUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type EmbeddingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiContextId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CompletionCreateInput = {
    prompt: string
    response: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiContext: AIContextCreateNestedOneWithoutCompletionsInput
    conversation?: ConversationCreateNestedOneWithoutCompletionsInput
  }

  export type CompletionUncheckedCreateInput = {
    id?: number
    aiContextId: number
    conversationId?: number | null
    prompt: string
    response: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletionUpdateInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiContext?: AIContextUpdateOneRequiredWithoutCompletionsNestedInput
    conversation?: ConversationUpdateOneWithoutCompletionsNestedInput
  }

  export type CompletionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiContextId?: IntFieldUpdateOperationsInput | number
    conversationId?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletionCreateManyInput = {
    id?: number
    aiContextId: number
    conversationId?: number | null
    prompt: string
    response: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletionUpdateManyMutationInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiContextId?: IntFieldUpdateOperationsInput | number
    conversationId?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type AIContextListRelationFilter = {
    every?: AIContextWhereInput
    some?: AIContextWhereInput
    none?: AIContextWhereInput
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIContextOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    resetToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    resetToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    resetToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumAIModelFilter<$PrismaModel = never> = {
    equals?: $Enums.AIModel | EnumAIModelFieldRefInput<$PrismaModel>
    in?: $Enums.AIModel[] | ListEnumAIModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIModel[] | ListEnumAIModelFieldRefInput<$PrismaModel>
    not?: NestedEnumAIModelFilter<$PrismaModel> | $Enums.AIModel
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type EmbeddingListRelationFilter = {
    every?: EmbeddingWhereInput
    some?: EmbeddingWhereInput
    none?: EmbeddingWhereInput
  }

  export type CompletionListRelationFilter = {
    every?: CompletionWhereInput
    some?: CompletionWhereInput
    none?: CompletionWhereInput
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmbeddingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIContextCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    instructions?: SortOrder
    temperature?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIContextAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    temperature?: SortOrder
  }

  export type AIContextMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    instructions?: SortOrder
    temperature?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIContextMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    instructions?: SortOrder
    temperature?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIContextSumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    temperature?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumAIModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIModel | EnumAIModelFieldRefInput<$PrismaModel>
    in?: $Enums.AIModel[] | ListEnumAIModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIModel[] | ListEnumAIModelFieldRefInput<$PrismaModel>
    not?: NestedEnumAIModelWithAggregatesFilter<$PrismaModel> | $Enums.AIModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIModelFilter<$PrismaModel>
    _max?: NestedEnumAIModelFilter<$PrismaModel>
  }

  export type AIContextScalarRelationFilter = {
    is?: AIContextWhereInput
    isNot?: AIContextWhereInput
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    requesterMsisdn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    requesterMsisdn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    requesterMsisdn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
  }

  export type EmbeddingCountOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    content?: SortOrder
  }

  export type EmbeddingAvgOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
  }

  export type EmbeddingMaxOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    content?: SortOrder
  }

  export type EmbeddingMinOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    content?: SortOrder
  }

  export type EmbeddingSumOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ConversationNullableScalarRelationFilter = {
    is?: ConversationWhereInput | null
    isNot?: ConversationWhereInput | null
  }

  export type CompletionCountOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    conversationId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletionAvgOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    conversationId?: SortOrder
  }

  export type CompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    conversationId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletionMinOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    conversationId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompletionSumOrderByAggregateInput = {
    id?: SortOrder
    aiContextId?: SortOrder
    conversationId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AdminCreateNestedManyWithoutTenantInput = {
    create?: XOR<AdminCreateWithoutTenantInput, AdminUncheckedCreateWithoutTenantInput> | AdminCreateWithoutTenantInput[] | AdminUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutTenantInput | AdminCreateOrConnectWithoutTenantInput[]
    createMany?: AdminCreateManyTenantInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type AIContextCreateNestedManyWithoutTenantInput = {
    create?: XOR<AIContextCreateWithoutTenantInput, AIContextUncheckedCreateWithoutTenantInput> | AIContextCreateWithoutTenantInput[] | AIContextUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AIContextCreateOrConnectWithoutTenantInput | AIContextCreateOrConnectWithoutTenantInput[]
    createMany?: AIContextCreateManyTenantInputEnvelope
    connect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AdminCreateWithoutTenantInput, AdminUncheckedCreateWithoutTenantInput> | AdminCreateWithoutTenantInput[] | AdminUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutTenantInput | AdminCreateOrConnectWithoutTenantInput[]
    createMany?: AdminCreateManyTenantInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type AIContextUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AIContextCreateWithoutTenantInput, AIContextUncheckedCreateWithoutTenantInput> | AIContextCreateWithoutTenantInput[] | AIContextUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AIContextCreateOrConnectWithoutTenantInput | AIContextCreateOrConnectWithoutTenantInput[]
    createMany?: AIContextCreateManyTenantInputEnvelope
    connect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AdminCreateWithoutTenantInput, AdminUncheckedCreateWithoutTenantInput> | AdminCreateWithoutTenantInput[] | AdminUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutTenantInput | AdminCreateOrConnectWithoutTenantInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutTenantInput | AdminUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AdminCreateManyTenantInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutTenantInput | AdminUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutTenantInput | AdminUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type AIContextUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AIContextCreateWithoutTenantInput, AIContextUncheckedCreateWithoutTenantInput> | AIContextCreateWithoutTenantInput[] | AIContextUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AIContextCreateOrConnectWithoutTenantInput | AIContextCreateOrConnectWithoutTenantInput[]
    upsert?: AIContextUpsertWithWhereUniqueWithoutTenantInput | AIContextUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AIContextCreateManyTenantInputEnvelope
    set?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    disconnect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    delete?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    connect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    update?: AIContextUpdateWithWhereUniqueWithoutTenantInput | AIContextUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AIContextUpdateManyWithWhereWithoutTenantInput | AIContextUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AIContextScalarWhereInput | AIContextScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AdminCreateWithoutTenantInput, AdminUncheckedCreateWithoutTenantInput> | AdminCreateWithoutTenantInput[] | AdminUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutTenantInput | AdminCreateOrConnectWithoutTenantInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutTenantInput | AdminUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AdminCreateManyTenantInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutTenantInput | AdminUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutTenantInput | AdminUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type AIContextUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AIContextCreateWithoutTenantInput, AIContextUncheckedCreateWithoutTenantInput> | AIContextCreateWithoutTenantInput[] | AIContextUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AIContextCreateOrConnectWithoutTenantInput | AIContextCreateOrConnectWithoutTenantInput[]
    upsert?: AIContextUpsertWithWhereUniqueWithoutTenantInput | AIContextUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AIContextCreateManyTenantInputEnvelope
    set?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    disconnect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    delete?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    connect?: AIContextWhereUniqueInput | AIContextWhereUniqueInput[]
    update?: AIContextUpdateWithWhereUniqueWithoutTenantInput | AIContextUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AIContextUpdateManyWithWhereWithoutTenantInput | AIContextUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AIContextScalarWhereInput | AIContextScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutAdminsInput = {
    create?: XOR<TenantCreateWithoutAdminsInput, TenantUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAdminsInput
    connect?: TenantWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TenantUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<TenantCreateWithoutAdminsInput, TenantUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAdminsInput
    upsert?: TenantUpsertWithoutAdminsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAdminsInput, TenantUpdateWithoutAdminsInput>, TenantUncheckedUpdateWithoutAdminsInput>
  }

  export type TenantCreateNestedOneWithoutAi_contextsInput = {
    create?: XOR<TenantCreateWithoutAi_contextsInput, TenantUncheckedCreateWithoutAi_contextsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAi_contextsInput
    connect?: TenantWhereUniqueInput
  }

  export type ConversationCreateNestedManyWithoutAiContextInput = {
    create?: XOR<ConversationCreateWithoutAiContextInput, ConversationUncheckedCreateWithoutAiContextInput> | ConversationCreateWithoutAiContextInput[] | ConversationUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAiContextInput | ConversationCreateOrConnectWithoutAiContextInput[]
    createMany?: ConversationCreateManyAiContextInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type EmbeddingCreateNestedManyWithoutAiContextInput = {
    create?: XOR<EmbeddingCreateWithoutAiContextInput, EmbeddingUncheckedCreateWithoutAiContextInput> | EmbeddingCreateWithoutAiContextInput[] | EmbeddingUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutAiContextInput | EmbeddingCreateOrConnectWithoutAiContextInput[]
    createMany?: EmbeddingCreateManyAiContextInputEnvelope
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
  }

  export type CompletionCreateNestedManyWithoutAiContextInput = {
    create?: XOR<CompletionCreateWithoutAiContextInput, CompletionUncheckedCreateWithoutAiContextInput> | CompletionCreateWithoutAiContextInput[] | CompletionUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutAiContextInput | CompletionCreateOrConnectWithoutAiContextInput[]
    createMany?: CompletionCreateManyAiContextInputEnvelope
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutAiContextInput = {
    create?: XOR<ConversationCreateWithoutAiContextInput, ConversationUncheckedCreateWithoutAiContextInput> | ConversationCreateWithoutAiContextInput[] | ConversationUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAiContextInput | ConversationCreateOrConnectWithoutAiContextInput[]
    createMany?: ConversationCreateManyAiContextInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type EmbeddingUncheckedCreateNestedManyWithoutAiContextInput = {
    create?: XOR<EmbeddingCreateWithoutAiContextInput, EmbeddingUncheckedCreateWithoutAiContextInput> | EmbeddingCreateWithoutAiContextInput[] | EmbeddingUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutAiContextInput | EmbeddingCreateOrConnectWithoutAiContextInput[]
    createMany?: EmbeddingCreateManyAiContextInputEnvelope
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
  }

  export type CompletionUncheckedCreateNestedManyWithoutAiContextInput = {
    create?: XOR<CompletionCreateWithoutAiContextInput, CompletionUncheckedCreateWithoutAiContextInput> | CompletionCreateWithoutAiContextInput[] | CompletionUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutAiContextInput | CompletionCreateOrConnectWithoutAiContextInput[]
    createMany?: CompletionCreateManyAiContextInputEnvelope
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAIModelFieldUpdateOperationsInput = {
    set?: $Enums.AIModel
  }

  export type TenantUpdateOneRequiredWithoutAi_contextsNestedInput = {
    create?: XOR<TenantCreateWithoutAi_contextsInput, TenantUncheckedCreateWithoutAi_contextsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAi_contextsInput
    upsert?: TenantUpsertWithoutAi_contextsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAi_contextsInput, TenantUpdateWithoutAi_contextsInput>, TenantUncheckedUpdateWithoutAi_contextsInput>
  }

  export type ConversationUpdateManyWithoutAiContextNestedInput = {
    create?: XOR<ConversationCreateWithoutAiContextInput, ConversationUncheckedCreateWithoutAiContextInput> | ConversationCreateWithoutAiContextInput[] | ConversationUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAiContextInput | ConversationCreateOrConnectWithoutAiContextInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutAiContextInput | ConversationUpsertWithWhereUniqueWithoutAiContextInput[]
    createMany?: ConversationCreateManyAiContextInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutAiContextInput | ConversationUpdateWithWhereUniqueWithoutAiContextInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutAiContextInput | ConversationUpdateManyWithWhereWithoutAiContextInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type EmbeddingUpdateManyWithoutAiContextNestedInput = {
    create?: XOR<EmbeddingCreateWithoutAiContextInput, EmbeddingUncheckedCreateWithoutAiContextInput> | EmbeddingCreateWithoutAiContextInput[] | EmbeddingUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutAiContextInput | EmbeddingCreateOrConnectWithoutAiContextInput[]
    upsert?: EmbeddingUpsertWithWhereUniqueWithoutAiContextInput | EmbeddingUpsertWithWhereUniqueWithoutAiContextInput[]
    createMany?: EmbeddingCreateManyAiContextInputEnvelope
    set?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    disconnect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    delete?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    update?: EmbeddingUpdateWithWhereUniqueWithoutAiContextInput | EmbeddingUpdateWithWhereUniqueWithoutAiContextInput[]
    updateMany?: EmbeddingUpdateManyWithWhereWithoutAiContextInput | EmbeddingUpdateManyWithWhereWithoutAiContextInput[]
    deleteMany?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
  }

  export type CompletionUpdateManyWithoutAiContextNestedInput = {
    create?: XOR<CompletionCreateWithoutAiContextInput, CompletionUncheckedCreateWithoutAiContextInput> | CompletionCreateWithoutAiContextInput[] | CompletionUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutAiContextInput | CompletionCreateOrConnectWithoutAiContextInput[]
    upsert?: CompletionUpsertWithWhereUniqueWithoutAiContextInput | CompletionUpsertWithWhereUniqueWithoutAiContextInput[]
    createMany?: CompletionCreateManyAiContextInputEnvelope
    set?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    disconnect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    delete?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    update?: CompletionUpdateWithWhereUniqueWithoutAiContextInput | CompletionUpdateWithWhereUniqueWithoutAiContextInput[]
    updateMany?: CompletionUpdateManyWithWhereWithoutAiContextInput | CompletionUpdateManyWithWhereWithoutAiContextInput[]
    deleteMany?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutAiContextNestedInput = {
    create?: XOR<ConversationCreateWithoutAiContextInput, ConversationUncheckedCreateWithoutAiContextInput> | ConversationCreateWithoutAiContextInput[] | ConversationUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAiContextInput | ConversationCreateOrConnectWithoutAiContextInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutAiContextInput | ConversationUpsertWithWhereUniqueWithoutAiContextInput[]
    createMany?: ConversationCreateManyAiContextInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutAiContextInput | ConversationUpdateWithWhereUniqueWithoutAiContextInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutAiContextInput | ConversationUpdateManyWithWhereWithoutAiContextInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type EmbeddingUncheckedUpdateManyWithoutAiContextNestedInput = {
    create?: XOR<EmbeddingCreateWithoutAiContextInput, EmbeddingUncheckedCreateWithoutAiContextInput> | EmbeddingCreateWithoutAiContextInput[] | EmbeddingUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: EmbeddingCreateOrConnectWithoutAiContextInput | EmbeddingCreateOrConnectWithoutAiContextInput[]
    upsert?: EmbeddingUpsertWithWhereUniqueWithoutAiContextInput | EmbeddingUpsertWithWhereUniqueWithoutAiContextInput[]
    createMany?: EmbeddingCreateManyAiContextInputEnvelope
    set?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    disconnect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    delete?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    connect?: EmbeddingWhereUniqueInput | EmbeddingWhereUniqueInput[]
    update?: EmbeddingUpdateWithWhereUniqueWithoutAiContextInput | EmbeddingUpdateWithWhereUniqueWithoutAiContextInput[]
    updateMany?: EmbeddingUpdateManyWithWhereWithoutAiContextInput | EmbeddingUpdateManyWithWhereWithoutAiContextInput[]
    deleteMany?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
  }

  export type CompletionUncheckedUpdateManyWithoutAiContextNestedInput = {
    create?: XOR<CompletionCreateWithoutAiContextInput, CompletionUncheckedCreateWithoutAiContextInput> | CompletionCreateWithoutAiContextInput[] | CompletionUncheckedCreateWithoutAiContextInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutAiContextInput | CompletionCreateOrConnectWithoutAiContextInput[]
    upsert?: CompletionUpsertWithWhereUniqueWithoutAiContextInput | CompletionUpsertWithWhereUniqueWithoutAiContextInput[]
    createMany?: CompletionCreateManyAiContextInputEnvelope
    set?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    disconnect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    delete?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    update?: CompletionUpdateWithWhereUniqueWithoutAiContextInput | CompletionUpdateWithWhereUniqueWithoutAiContextInput[]
    updateMany?: CompletionUpdateManyWithWhereWithoutAiContextInput | CompletionUpdateManyWithWhereWithoutAiContextInput[]
    deleteMany?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
  }

  export type AIContextCreateNestedOneWithoutConversationsInput = {
    create?: XOR<AIContextCreateWithoutConversationsInput, AIContextUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: AIContextCreateOrConnectWithoutConversationsInput
    connect?: AIContextWhereUniqueInput
  }

  export type CompletionCreateNestedManyWithoutConversationInput = {
    create?: XOR<CompletionCreateWithoutConversationInput, CompletionUncheckedCreateWithoutConversationInput> | CompletionCreateWithoutConversationInput[] | CompletionUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutConversationInput | CompletionCreateOrConnectWithoutConversationInput[]
    createMany?: CompletionCreateManyConversationInputEnvelope
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
  }

  export type CompletionUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<CompletionCreateWithoutConversationInput, CompletionUncheckedCreateWithoutConversationInput> | CompletionCreateWithoutConversationInput[] | CompletionUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutConversationInput | CompletionCreateOrConnectWithoutConversationInput[]
    createMany?: CompletionCreateManyConversationInputEnvelope
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
  }

  export type AIContextUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<AIContextCreateWithoutConversationsInput, AIContextUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: AIContextCreateOrConnectWithoutConversationsInput
    upsert?: AIContextUpsertWithoutConversationsInput
    connect?: AIContextWhereUniqueInput
    update?: XOR<XOR<AIContextUpdateToOneWithWhereWithoutConversationsInput, AIContextUpdateWithoutConversationsInput>, AIContextUncheckedUpdateWithoutConversationsInput>
  }

  export type CompletionUpdateManyWithoutConversationNestedInput = {
    create?: XOR<CompletionCreateWithoutConversationInput, CompletionUncheckedCreateWithoutConversationInput> | CompletionCreateWithoutConversationInput[] | CompletionUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutConversationInput | CompletionCreateOrConnectWithoutConversationInput[]
    upsert?: CompletionUpsertWithWhereUniqueWithoutConversationInput | CompletionUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: CompletionCreateManyConversationInputEnvelope
    set?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    disconnect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    delete?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    update?: CompletionUpdateWithWhereUniqueWithoutConversationInput | CompletionUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: CompletionUpdateManyWithWhereWithoutConversationInput | CompletionUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
  }

  export type CompletionUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<CompletionCreateWithoutConversationInput, CompletionUncheckedCreateWithoutConversationInput> | CompletionCreateWithoutConversationInput[] | CompletionUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CompletionCreateOrConnectWithoutConversationInput | CompletionCreateOrConnectWithoutConversationInput[]
    upsert?: CompletionUpsertWithWhereUniqueWithoutConversationInput | CompletionUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: CompletionCreateManyConversationInputEnvelope
    set?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    disconnect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    delete?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    connect?: CompletionWhereUniqueInput | CompletionWhereUniqueInput[]
    update?: CompletionUpdateWithWhereUniqueWithoutConversationInput | CompletionUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: CompletionUpdateManyWithWhereWithoutConversationInput | CompletionUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
  }

  export type AIContextCreateNestedOneWithoutEmbeddingsInput = {
    create?: XOR<AIContextCreateWithoutEmbeddingsInput, AIContextUncheckedCreateWithoutEmbeddingsInput>
    connectOrCreate?: AIContextCreateOrConnectWithoutEmbeddingsInput
    connect?: AIContextWhereUniqueInput
  }

  export type AIContextUpdateOneRequiredWithoutEmbeddingsNestedInput = {
    create?: XOR<AIContextCreateWithoutEmbeddingsInput, AIContextUncheckedCreateWithoutEmbeddingsInput>
    connectOrCreate?: AIContextCreateOrConnectWithoutEmbeddingsInput
    upsert?: AIContextUpsertWithoutEmbeddingsInput
    connect?: AIContextWhereUniqueInput
    update?: XOR<XOR<AIContextUpdateToOneWithWhereWithoutEmbeddingsInput, AIContextUpdateWithoutEmbeddingsInput>, AIContextUncheckedUpdateWithoutEmbeddingsInput>
  }

  export type AIContextCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<AIContextCreateWithoutCompletionsInput, AIContextUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: AIContextCreateOrConnectWithoutCompletionsInput
    connect?: AIContextWhereUniqueInput
  }

  export type ConversationCreateNestedOneWithoutCompletionsInput = {
    create?: XOR<ConversationCreateWithoutCompletionsInput, ConversationUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutCompletionsInput
    connect?: ConversationWhereUniqueInput
  }

  export type AIContextUpdateOneRequiredWithoutCompletionsNestedInput = {
    create?: XOR<AIContextCreateWithoutCompletionsInput, AIContextUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: AIContextCreateOrConnectWithoutCompletionsInput
    upsert?: AIContextUpsertWithoutCompletionsInput
    connect?: AIContextWhereUniqueInput
    update?: XOR<XOR<AIContextUpdateToOneWithWhereWithoutCompletionsInput, AIContextUpdateWithoutCompletionsInput>, AIContextUncheckedUpdateWithoutCompletionsInput>
  }

  export type ConversationUpdateOneWithoutCompletionsNestedInput = {
    create?: XOR<ConversationCreateWithoutCompletionsInput, ConversationUncheckedCreateWithoutCompletionsInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutCompletionsInput
    upsert?: ConversationUpsertWithoutCompletionsInput
    disconnect?: ConversationWhereInput | boolean
    delete?: ConversationWhereInput | boolean
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutCompletionsInput, ConversationUpdateWithoutCompletionsInput>, ConversationUncheckedUpdateWithoutCompletionsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAIModelFilter<$PrismaModel = never> = {
    equals?: $Enums.AIModel | EnumAIModelFieldRefInput<$PrismaModel>
    in?: $Enums.AIModel[] | ListEnumAIModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIModel[] | ListEnumAIModelFieldRefInput<$PrismaModel>
    not?: NestedEnumAIModelFilter<$PrismaModel> | $Enums.AIModel
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAIModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIModel | EnumAIModelFieldRefInput<$PrismaModel>
    in?: $Enums.AIModel[] | ListEnumAIModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AIModel[] | ListEnumAIModelFieldRefInput<$PrismaModel>
    not?: NestedEnumAIModelWithAggregatesFilter<$PrismaModel> | $Enums.AIModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAIModelFilter<$PrismaModel>
    _max?: NestedEnumAIModelFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AdminCreateWithoutTenantInput = {
    email: string
    password?: string | null
    googleId?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutTenantInput = {
    id?: number
    email: string
    password?: string | null
    googleId?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutTenantInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutTenantInput, AdminUncheckedCreateWithoutTenantInput>
  }

  export type AdminCreateManyTenantInputEnvelope = {
    data: AdminCreateManyTenantInput | AdminCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AIContextCreateWithoutTenantInput = {
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutAiContextInput
    embeddings?: EmbeddingCreateNestedManyWithoutAiContextInput
    completions?: CompletionCreateNestedManyWithoutAiContextInput
  }

  export type AIContextUncheckedCreateWithoutTenantInput = {
    id?: number
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutAiContextInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutAiContextInput
    completions?: CompletionUncheckedCreateNestedManyWithoutAiContextInput
  }

  export type AIContextCreateOrConnectWithoutTenantInput = {
    where: AIContextWhereUniqueInput
    create: XOR<AIContextCreateWithoutTenantInput, AIContextUncheckedCreateWithoutTenantInput>
  }

  export type AIContextCreateManyTenantInputEnvelope = {
    data: AIContextCreateManyTenantInput | AIContextCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithWhereUniqueWithoutTenantInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutTenantInput, AdminUncheckedUpdateWithoutTenantInput>
    create: XOR<AdminCreateWithoutTenantInput, AdminUncheckedCreateWithoutTenantInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutTenantInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutTenantInput, AdminUncheckedUpdateWithoutTenantInput>
  }

  export type AdminUpdateManyWithWhereWithoutTenantInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutTenantInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id?: IntFilter<"Admin"> | number
    tenantId?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringNullableFilter<"Admin"> | string | null
    googleId?: StringNullableFilter<"Admin"> | string | null
    resetToken?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AIContextUpsertWithWhereUniqueWithoutTenantInput = {
    where: AIContextWhereUniqueInput
    update: XOR<AIContextUpdateWithoutTenantInput, AIContextUncheckedUpdateWithoutTenantInput>
    create: XOR<AIContextCreateWithoutTenantInput, AIContextUncheckedCreateWithoutTenantInput>
  }

  export type AIContextUpdateWithWhereUniqueWithoutTenantInput = {
    where: AIContextWhereUniqueInput
    data: XOR<AIContextUpdateWithoutTenantInput, AIContextUncheckedUpdateWithoutTenantInput>
  }

  export type AIContextUpdateManyWithWhereWithoutTenantInput = {
    where: AIContextScalarWhereInput
    data: XOR<AIContextUpdateManyMutationInput, AIContextUncheckedUpdateManyWithoutTenantInput>
  }

  export type AIContextScalarWhereInput = {
    AND?: AIContextScalarWhereInput | AIContextScalarWhereInput[]
    OR?: AIContextScalarWhereInput[]
    NOT?: AIContextScalarWhereInput | AIContextScalarWhereInput[]
    id?: IntFilter<"AIContext"> | number
    tenantId?: IntFilter<"AIContext"> | number
    name?: StringFilter<"AIContext"> | string
    instructions?: StringNullableFilter<"AIContext"> | string | null
    temperature?: FloatFilter<"AIContext"> | number
    aiModel?: EnumAIModelFilter<"AIContext"> | $Enums.AIModel
    createdAt?: DateTimeFilter<"AIContext"> | Date | string
    updatedAt?: DateTimeFilter<"AIContext"> | Date | string
  }

  export type TenantCreateWithoutAdminsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ai_contexts?: AIContextCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutAdminsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ai_contexts?: AIContextUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutAdminsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAdminsInput, TenantUncheckedCreateWithoutAdminsInput>
  }

  export type TenantUpsertWithoutAdminsInput = {
    update: XOR<TenantUpdateWithoutAdminsInput, TenantUncheckedUpdateWithoutAdminsInput>
    create: XOR<TenantCreateWithoutAdminsInput, TenantUncheckedCreateWithoutAdminsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutAdminsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAdminsInput, TenantUncheckedUpdateWithoutAdminsInput>
  }

  export type TenantUpdateWithoutAdminsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_contexts?: AIContextUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutAdminsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ai_contexts?: AIContextUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutAi_contextsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutAi_contextsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: AdminUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutAi_contextsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAi_contextsInput, TenantUncheckedCreateWithoutAi_contextsInput>
  }

  export type ConversationCreateWithoutAiContextInput = {
    requesterMsisdn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: CompletionCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutAiContextInput = {
    id?: number
    requesterMsisdn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    completions?: CompletionUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutAiContextInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutAiContextInput, ConversationUncheckedCreateWithoutAiContextInput>
  }

  export type ConversationCreateManyAiContextInputEnvelope = {
    data: ConversationCreateManyAiContextInput | ConversationCreateManyAiContextInput[]
    skipDuplicates?: boolean
  }

  export type EmbeddingCreateWithoutAiContextInput = {
    content: string
  }

  export type EmbeddingUncheckedCreateWithoutAiContextInput = {
    id?: number
    content: string
  }

  export type EmbeddingCreateOrConnectWithoutAiContextInput = {
    where: EmbeddingWhereUniqueInput
    create: XOR<EmbeddingCreateWithoutAiContextInput, EmbeddingUncheckedCreateWithoutAiContextInput>
  }

  export type EmbeddingCreateManyAiContextInputEnvelope = {
    data: EmbeddingCreateManyAiContextInput | EmbeddingCreateManyAiContextInput[]
    skipDuplicates?: boolean
  }

  export type CompletionCreateWithoutAiContextInput = {
    prompt: string
    response: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation?: ConversationCreateNestedOneWithoutCompletionsInput
  }

  export type CompletionUncheckedCreateWithoutAiContextInput = {
    id?: number
    conversationId?: number | null
    prompt: string
    response: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletionCreateOrConnectWithoutAiContextInput = {
    where: CompletionWhereUniqueInput
    create: XOR<CompletionCreateWithoutAiContextInput, CompletionUncheckedCreateWithoutAiContextInput>
  }

  export type CompletionCreateManyAiContextInputEnvelope = {
    data: CompletionCreateManyAiContextInput | CompletionCreateManyAiContextInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutAi_contextsInput = {
    update: XOR<TenantUpdateWithoutAi_contextsInput, TenantUncheckedUpdateWithoutAi_contextsInput>
    create: XOR<TenantCreateWithoutAi_contextsInput, TenantUncheckedCreateWithoutAi_contextsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutAi_contextsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAi_contextsInput, TenantUncheckedUpdateWithoutAi_contextsInput>
  }

  export type TenantUpdateWithoutAi_contextsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutAi_contextsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: AdminUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ConversationUpsertWithWhereUniqueWithoutAiContextInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutAiContextInput, ConversationUncheckedUpdateWithoutAiContextInput>
    create: XOR<ConversationCreateWithoutAiContextInput, ConversationUncheckedCreateWithoutAiContextInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutAiContextInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutAiContextInput, ConversationUncheckedUpdateWithoutAiContextInput>
  }

  export type ConversationUpdateManyWithWhereWithoutAiContextInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutAiContextInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: IntFilter<"Conversation"> | number
    aiContextId?: IntFilter<"Conversation"> | number
    requesterMsisdn?: StringFilter<"Conversation"> | string
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type EmbeddingUpsertWithWhereUniqueWithoutAiContextInput = {
    where: EmbeddingWhereUniqueInput
    update: XOR<EmbeddingUpdateWithoutAiContextInput, EmbeddingUncheckedUpdateWithoutAiContextInput>
    create: XOR<EmbeddingCreateWithoutAiContextInput, EmbeddingUncheckedCreateWithoutAiContextInput>
  }

  export type EmbeddingUpdateWithWhereUniqueWithoutAiContextInput = {
    where: EmbeddingWhereUniqueInput
    data: XOR<EmbeddingUpdateWithoutAiContextInput, EmbeddingUncheckedUpdateWithoutAiContextInput>
  }

  export type EmbeddingUpdateManyWithWhereWithoutAiContextInput = {
    where: EmbeddingScalarWhereInput
    data: XOR<EmbeddingUpdateManyMutationInput, EmbeddingUncheckedUpdateManyWithoutAiContextInput>
  }

  export type EmbeddingScalarWhereInput = {
    AND?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
    OR?: EmbeddingScalarWhereInput[]
    NOT?: EmbeddingScalarWhereInput | EmbeddingScalarWhereInput[]
    id?: IntFilter<"Embedding"> | number
    aiContextId?: IntFilter<"Embedding"> | number
    content?: StringFilter<"Embedding"> | string
  }

  export type CompletionUpsertWithWhereUniqueWithoutAiContextInput = {
    where: CompletionWhereUniqueInput
    update: XOR<CompletionUpdateWithoutAiContextInput, CompletionUncheckedUpdateWithoutAiContextInput>
    create: XOR<CompletionCreateWithoutAiContextInput, CompletionUncheckedCreateWithoutAiContextInput>
  }

  export type CompletionUpdateWithWhereUniqueWithoutAiContextInput = {
    where: CompletionWhereUniqueInput
    data: XOR<CompletionUpdateWithoutAiContextInput, CompletionUncheckedUpdateWithoutAiContextInput>
  }

  export type CompletionUpdateManyWithWhereWithoutAiContextInput = {
    where: CompletionScalarWhereInput
    data: XOR<CompletionUpdateManyMutationInput, CompletionUncheckedUpdateManyWithoutAiContextInput>
  }

  export type CompletionScalarWhereInput = {
    AND?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
    OR?: CompletionScalarWhereInput[]
    NOT?: CompletionScalarWhereInput | CompletionScalarWhereInput[]
    id?: IntFilter<"Completion"> | number
    aiContextId?: IntFilter<"Completion"> | number
    conversationId?: IntNullableFilter<"Completion"> | number | null
    prompt?: StringFilter<"Completion"> | string
    response?: StringFilter<"Completion"> | string
    createdAt?: DateTimeFilter<"Completion"> | Date | string
    updatedAt?: DateTimeFilter<"Completion"> | Date | string
  }

  export type AIContextCreateWithoutConversationsInput = {
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAi_contextsInput
    embeddings?: EmbeddingCreateNestedManyWithoutAiContextInput
    completions?: CompletionCreateNestedManyWithoutAiContextInput
  }

  export type AIContextUncheckedCreateWithoutConversationsInput = {
    id?: number
    tenantId: number
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutAiContextInput
    completions?: CompletionUncheckedCreateNestedManyWithoutAiContextInput
  }

  export type AIContextCreateOrConnectWithoutConversationsInput = {
    where: AIContextWhereUniqueInput
    create: XOR<AIContextCreateWithoutConversationsInput, AIContextUncheckedCreateWithoutConversationsInput>
  }

  export type CompletionCreateWithoutConversationInput = {
    prompt: string
    response: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiContext: AIContextCreateNestedOneWithoutCompletionsInput
  }

  export type CompletionUncheckedCreateWithoutConversationInput = {
    id?: number
    aiContextId: number
    prompt: string
    response: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletionCreateOrConnectWithoutConversationInput = {
    where: CompletionWhereUniqueInput
    create: XOR<CompletionCreateWithoutConversationInput, CompletionUncheckedCreateWithoutConversationInput>
  }

  export type CompletionCreateManyConversationInputEnvelope = {
    data: CompletionCreateManyConversationInput | CompletionCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type AIContextUpsertWithoutConversationsInput = {
    update: XOR<AIContextUpdateWithoutConversationsInput, AIContextUncheckedUpdateWithoutConversationsInput>
    create: XOR<AIContextCreateWithoutConversationsInput, AIContextUncheckedCreateWithoutConversationsInput>
    where?: AIContextWhereInput
  }

  export type AIContextUpdateToOneWithWhereWithoutConversationsInput = {
    where?: AIContextWhereInput
    data: XOR<AIContextUpdateWithoutConversationsInput, AIContextUncheckedUpdateWithoutConversationsInput>
  }

  export type AIContextUpdateWithoutConversationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAi_contextsNestedInput
    embeddings?: EmbeddingUpdateManyWithoutAiContextNestedInput
    completions?: CompletionUpdateManyWithoutAiContextNestedInput
  }

  export type AIContextUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    embeddings?: EmbeddingUncheckedUpdateManyWithoutAiContextNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutAiContextNestedInput
  }

  export type CompletionUpsertWithWhereUniqueWithoutConversationInput = {
    where: CompletionWhereUniqueInput
    update: XOR<CompletionUpdateWithoutConversationInput, CompletionUncheckedUpdateWithoutConversationInput>
    create: XOR<CompletionCreateWithoutConversationInput, CompletionUncheckedCreateWithoutConversationInput>
  }

  export type CompletionUpdateWithWhereUniqueWithoutConversationInput = {
    where: CompletionWhereUniqueInput
    data: XOR<CompletionUpdateWithoutConversationInput, CompletionUncheckedUpdateWithoutConversationInput>
  }

  export type CompletionUpdateManyWithWhereWithoutConversationInput = {
    where: CompletionScalarWhereInput
    data: XOR<CompletionUpdateManyMutationInput, CompletionUncheckedUpdateManyWithoutConversationInput>
  }

  export type AIContextCreateWithoutEmbeddingsInput = {
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAi_contextsInput
    conversations?: ConversationCreateNestedManyWithoutAiContextInput
    completions?: CompletionCreateNestedManyWithoutAiContextInput
  }

  export type AIContextUncheckedCreateWithoutEmbeddingsInput = {
    id?: number
    tenantId: number
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutAiContextInput
    completions?: CompletionUncheckedCreateNestedManyWithoutAiContextInput
  }

  export type AIContextCreateOrConnectWithoutEmbeddingsInput = {
    where: AIContextWhereUniqueInput
    create: XOR<AIContextCreateWithoutEmbeddingsInput, AIContextUncheckedCreateWithoutEmbeddingsInput>
  }

  export type AIContextUpsertWithoutEmbeddingsInput = {
    update: XOR<AIContextUpdateWithoutEmbeddingsInput, AIContextUncheckedUpdateWithoutEmbeddingsInput>
    create: XOR<AIContextCreateWithoutEmbeddingsInput, AIContextUncheckedCreateWithoutEmbeddingsInput>
    where?: AIContextWhereInput
  }

  export type AIContextUpdateToOneWithWhereWithoutEmbeddingsInput = {
    where?: AIContextWhereInput
    data: XOR<AIContextUpdateWithoutEmbeddingsInput, AIContextUncheckedUpdateWithoutEmbeddingsInput>
  }

  export type AIContextUpdateWithoutEmbeddingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAi_contextsNestedInput
    conversations?: ConversationUpdateManyWithoutAiContextNestedInput
    completions?: CompletionUpdateManyWithoutAiContextNestedInput
  }

  export type AIContextUncheckedUpdateWithoutEmbeddingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutAiContextNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutAiContextNestedInput
  }

  export type AIContextCreateWithoutCompletionsInput = {
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutAi_contextsInput
    conversations?: ConversationCreateNestedManyWithoutAiContextInput
    embeddings?: EmbeddingCreateNestedManyWithoutAiContextInput
  }

  export type AIContextUncheckedCreateWithoutCompletionsInput = {
    id?: number
    tenantId: number
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutAiContextInput
    embeddings?: EmbeddingUncheckedCreateNestedManyWithoutAiContextInput
  }

  export type AIContextCreateOrConnectWithoutCompletionsInput = {
    where: AIContextWhereUniqueInput
    create: XOR<AIContextCreateWithoutCompletionsInput, AIContextUncheckedCreateWithoutCompletionsInput>
  }

  export type ConversationCreateWithoutCompletionsInput = {
    requesterMsisdn: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiContext: AIContextCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutCompletionsInput = {
    id?: number
    aiContextId: number
    requesterMsisdn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutCompletionsInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutCompletionsInput, ConversationUncheckedCreateWithoutCompletionsInput>
  }

  export type AIContextUpsertWithoutCompletionsInput = {
    update: XOR<AIContextUpdateWithoutCompletionsInput, AIContextUncheckedUpdateWithoutCompletionsInput>
    create: XOR<AIContextCreateWithoutCompletionsInput, AIContextUncheckedCreateWithoutCompletionsInput>
    where?: AIContextWhereInput
  }

  export type AIContextUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: AIContextWhereInput
    data: XOR<AIContextUpdateWithoutCompletionsInput, AIContextUncheckedUpdateWithoutCompletionsInput>
  }

  export type AIContextUpdateWithoutCompletionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAi_contextsNestedInput
    conversations?: ConversationUpdateManyWithoutAiContextNestedInput
    embeddings?: EmbeddingUpdateManyWithoutAiContextNestedInput
  }

  export type AIContextUncheckedUpdateWithoutCompletionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutAiContextNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutAiContextNestedInput
  }

  export type ConversationUpsertWithoutCompletionsInput = {
    update: XOR<ConversationUpdateWithoutCompletionsInput, ConversationUncheckedUpdateWithoutCompletionsInput>
    create: XOR<ConversationCreateWithoutCompletionsInput, ConversationUncheckedCreateWithoutCompletionsInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutCompletionsInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutCompletionsInput, ConversationUncheckedUpdateWithoutCompletionsInput>
  }

  export type ConversationUpdateWithoutCompletionsInput = {
    requesterMsisdn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiContext?: AIContextUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutCompletionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiContextId?: IntFieldUpdateOperationsInput | number
    requesterMsisdn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyTenantInput = {
    id?: number
    email: string
    password?: string | null
    googleId?: string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIContextCreateManyTenantInput = {
    id?: number
    name: string
    instructions?: string | null
    temperature: number
    aiModel?: $Enums.AIModel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateWithoutTenantInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIContextUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutAiContextNestedInput
    embeddings?: EmbeddingUpdateManyWithoutAiContextNestedInput
    completions?: CompletionUpdateManyWithoutAiContextNestedInput
  }

  export type AIContextUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutAiContextNestedInput
    embeddings?: EmbeddingUncheckedUpdateManyWithoutAiContextNestedInput
    completions?: CompletionUncheckedUpdateManyWithoutAiContextNestedInput
  }

  export type AIContextUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: FloatFieldUpdateOperationsInput | number
    aiModel?: EnumAIModelFieldUpdateOperationsInput | $Enums.AIModel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateManyAiContextInput = {
    id?: number
    requesterMsisdn: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmbeddingCreateManyAiContextInput = {
    id?: number
    content: string
  }

  export type CompletionCreateManyAiContextInput = {
    id?: number
    conversationId?: number | null
    prompt: string
    response: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateWithoutAiContextInput = {
    requesterMsisdn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: CompletionUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutAiContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterMsisdn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completions?: CompletionUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutAiContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterMsisdn?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmbeddingUpdateWithoutAiContextInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type EmbeddingUncheckedUpdateWithoutAiContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type EmbeddingUncheckedUpdateManyWithoutAiContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CompletionUpdateWithoutAiContextInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneWithoutCompletionsNestedInput
  }

  export type CompletionUncheckedUpdateWithoutAiContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletionUncheckedUpdateManyWithoutAiContextInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: NullableIntFieldUpdateOperationsInput | number | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletionCreateManyConversationInput = {
    id?: number
    aiContextId: number
    prompt: string
    response: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompletionUpdateWithoutConversationInput = {
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiContext?: AIContextUpdateOneRequiredWithoutCompletionsNestedInput
  }

  export type CompletionUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiContextId?: IntFieldUpdateOperationsInput | number
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletionUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    aiContextId?: IntFieldUpdateOperationsInput | number
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}