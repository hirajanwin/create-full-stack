import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Todo = {
  __typename?: "Todo";
  id: Scalars["Int"];
  name: Scalars["String"];
  complete: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  todos: Array<Todo>;
};

export type Mutation = {
  __typename?: "Mutation";
  createTodo: Todo;
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
};

export type MutationCreateTodoArgs = {
  name: Scalars["String"];
};

export type MutationUpdateTodoArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  complete?: Maybe<Scalars["Boolean"]>;
};

export type MutationDeleteTodoArgs = {
  id: Scalars["Int"];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Todo: ResolverTypeWrapper<Todo>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Todo: Todo;
  Int: Scalars["Int"];
  String: Scalars["String"];
  Boolean: Scalars["Boolean"];
  Query: {};
  Mutation: {};
}>;

export type TodoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Todo"] = ResolversParentTypes["Todo"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  complete?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  todos?: Resolver<Array<ResolversTypes["Todo"]>, ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  createTodo?: Resolver<
    ResolversTypes["Todo"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTodoArgs, "name">
  >;
  updateTodo?: Resolver<
    Maybe<ResolversTypes["Todo"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTodoArgs, "id">
  >;
  deleteTodo?: Resolver<
    Maybe<ResolversTypes["Todo"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTodoArgs, "id">
  >;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Todo?: TodoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
