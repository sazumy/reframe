import gql from 'graphql-tag';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};


/** Autogenerated input type of EditUser */
export type EditUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
  example?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of EditUser. */
export type EditUserPayload = {
  __typename?: 'EditUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type Mutation = {
  __typename?: 'Mutation';
  editUser?: Maybe<EditUserPayload>;
  say?: Maybe<SayPayload>;
};


export type MutationEditUserArgs = {
  input: EditUserInput;
};


export type MutationSayArgs = {
  input: SayInput;
};

export type NegativeWord = {
  __typename?: 'NegativeWord';
  content: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  kana: Scalars['String'];
  positiveWords: PositiveWordConnection;
  updatedAt: Scalars['ISO8601DateTime'];
};


export type NegativeWordPositiveWordsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for NegativeWord. */
export type NegativeWordConnection = {
  __typename?: 'NegativeWordConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NegativeWordEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<NegativeWord>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type NegativeWordEdge = {
  __typename?: 'NegativeWordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<NegativeWord>;
};

export type NegativeWordSearchParams = {
  kana?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of OnMessageAdded. */
export type OnMessageAddedPayload = {
  __typename?: 'OnMessageAddedPayload';
  message: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PositiveWord = {
  __typename?: 'PositiveWord';
  createdAt: Scalars['ISO8601DateTime'];
  feature?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  rentai?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for PositiveWord. */
export type PositiveWordConnection = {
  __typename?: 'PositiveWordConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PositiveWordEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<PositiveWord>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PositiveWordEdge = {
  __typename?: 'PositiveWordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<PositiveWord>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  negativeWord?: Maybe<NegativeWord>;
  /** ネガティブな単語一覧、およびその検索結果 */
  negativeWordSearchResults?: Maybe<NegativeWordConnection>;
  negativeWords: NegativeWordConnection;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryNegativeWordArgs = {
  id: Scalars['ID'];
};


export type QueryNegativeWordSearchResultsArgs = {
  q?: Maybe<NegativeWordSearchParams>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNegativeWordsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Autogenerated input type of Say */
export type SayInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};

/** Autogenerated return type of Say. */
export type SayPayload = {
  __typename?: 'SayPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onMessageAdded: OnMessageAddedPayload;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type NegativeWordItemFragment = (
  { __typename?: 'NegativeWord' }
  & Pick<NegativeWord, 'id' | 'content' | 'kana'>
);

export type PositiveWordItemFragment = (
  { __typename?: 'PositiveWord' }
  & Pick<PositiveWord, 'id' | 'rentai' | 'feature'>
);

export type UserItemFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email'>
);

export type SayMutationVariables = Exact<{
  input: SayInput;
}>;


export type SayMutation = (
  { __typename?: 'Mutation' }
  & { say?: Maybe<(
    { __typename?: 'SayPayload' }
    & Pick<SayPayload, 'completed'>
  )> }
);

export type NegativeWordSearchResultsQueryVariables = Exact<{
  q?: Maybe<NegativeWordSearchParams>;
}>;


export type NegativeWordSearchResultsQuery = (
  { __typename?: 'Query' }
  & { negativeWordSearchResults?: Maybe<(
    { __typename?: 'NegativeWordConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'NegativeWord' }
      & NegativeWordItemFragment
    )>>> }
  )> }
);

export type NegativeWordsQueryVariables = Exact<{ [key: string]: never; }>;


export type NegativeWordsQuery = (
  { __typename?: 'Query' }
  & { negativeWords: (
    { __typename?: 'NegativeWordConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'NegativeWord' }
      & NegativeWordItemFragment
    )>>> }
  ) }
);

export type ParaphraseQueryVariables = Exact<{
  negativeWordId: Scalars['ID'];
}>;


export type ParaphraseQuery = (
  { __typename?: 'Query' }
  & { negativeWord?: Maybe<(
    { __typename?: 'NegativeWord' }
    & Pick<NegativeWord, 'content'>
    & { positiveWords: (
      { __typename?: 'PositiveWordConnection' }
      & { nodes?: Maybe<Array<Maybe<(
        { __typename?: 'PositiveWord' }
        & PositiveWordItemFragment
      )>>> }
    ) }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & UserItemFragment
  )> }
);

export type OnMessageAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnMessageAddedSubscription = (
  { __typename?: 'Subscription' }
  & { onMessageAdded: (
    { __typename?: 'OnMessageAddedPayload' }
    & Pick<OnMessageAddedPayload, 'message'>
  ) }
);

export const NegativeWordItemFragmentDoc = gql`
    fragment NegativeWordItem on NegativeWord {
  id
  content
  kana
}
    `;
export const PositiveWordItemFragmentDoc = gql`
    fragment PositiveWordItem on PositiveWord {
  id
  rentai
  feature
}
    `;
export const UserItemFragmentDoc = gql`
    fragment UserItem on User {
  id
  email
}
    `;
export const SayDocument = gql`
    mutation say($input: SayInput!) {
  say(input: $input) {
    completed
  }
}
    `;
export type SayMutationFn = Apollo.MutationFunction<SayMutation, SayMutationVariables>;

/**
 * __useSayMutation__
 *
 * To run a mutation, you first call `useSayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sayMutation, { data, loading, error }] = useSayMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSayMutation(baseOptions?: Apollo.MutationHookOptions<SayMutation, SayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SayMutation, SayMutationVariables>(SayDocument, options);
      }
export type SayMutationHookResult = ReturnType<typeof useSayMutation>;
export type SayMutationResult = Apollo.MutationResult<SayMutation>;
export type SayMutationOptions = Apollo.BaseMutationOptions<SayMutation, SayMutationVariables>;
export const NegativeWordSearchResultsDocument = gql`
    query negativeWordSearchResults($q: NegativeWordSearchParams) {
  negativeWordSearchResults(q: $q) {
    nodes {
      ...NegativeWordItem
    }
  }
}
    ${NegativeWordItemFragmentDoc}`;

/**
 * __useNegativeWordSearchResultsQuery__
 *
 * To run a query within a React component, call `useNegativeWordSearchResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNegativeWordSearchResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNegativeWordSearchResultsQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
export function useNegativeWordSearchResultsQuery(baseOptions?: Apollo.QueryHookOptions<NegativeWordSearchResultsQuery, NegativeWordSearchResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NegativeWordSearchResultsQuery, NegativeWordSearchResultsQueryVariables>(NegativeWordSearchResultsDocument, options);
      }
export function useNegativeWordSearchResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NegativeWordSearchResultsQuery, NegativeWordSearchResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NegativeWordSearchResultsQuery, NegativeWordSearchResultsQueryVariables>(NegativeWordSearchResultsDocument, options);
        }
export type NegativeWordSearchResultsQueryHookResult = ReturnType<typeof useNegativeWordSearchResultsQuery>;
export type NegativeWordSearchResultsLazyQueryHookResult = ReturnType<typeof useNegativeWordSearchResultsLazyQuery>;
export type NegativeWordSearchResultsQueryResult = Apollo.QueryResult<NegativeWordSearchResultsQuery, NegativeWordSearchResultsQueryVariables>;
export function refetchNegativeWordSearchResultsQuery(variables?: NegativeWordSearchResultsQueryVariables) {
      return { query: NegativeWordSearchResultsDocument, variables: variables }
    }
export const NegativeWordsDocument = gql`
    query negativeWords {
  negativeWords {
    nodes {
      ...NegativeWordItem
    }
  }
}
    ${NegativeWordItemFragmentDoc}`;

/**
 * __useNegativeWordsQuery__
 *
 * To run a query within a React component, call `useNegativeWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNegativeWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNegativeWordsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNegativeWordsQuery(baseOptions?: Apollo.QueryHookOptions<NegativeWordsQuery, NegativeWordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NegativeWordsQuery, NegativeWordsQueryVariables>(NegativeWordsDocument, options);
      }
export function useNegativeWordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NegativeWordsQuery, NegativeWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NegativeWordsQuery, NegativeWordsQueryVariables>(NegativeWordsDocument, options);
        }
export type NegativeWordsQueryHookResult = ReturnType<typeof useNegativeWordsQuery>;
export type NegativeWordsLazyQueryHookResult = ReturnType<typeof useNegativeWordsLazyQuery>;
export type NegativeWordsQueryResult = Apollo.QueryResult<NegativeWordsQuery, NegativeWordsQueryVariables>;
export function refetchNegativeWordsQuery(variables?: NegativeWordsQueryVariables) {
      return { query: NegativeWordsDocument, variables: variables }
    }
export const ParaphraseDocument = gql`
    query paraphrase($negativeWordId: ID!) {
  negativeWord(id: $negativeWordId) {
    content
    positiveWords {
      nodes {
        ...PositiveWordItem
      }
    }
  }
}
    ${PositiveWordItemFragmentDoc}`;

/**
 * __useParaphraseQuery__
 *
 * To run a query within a React component, call `useParaphraseQuery` and pass it any options that fit your needs.
 * When your component renders, `useParaphraseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParaphraseQuery({
 *   variables: {
 *      negativeWordId: // value for 'negativeWordId'
 *   },
 * });
 */
export function useParaphraseQuery(baseOptions: Apollo.QueryHookOptions<ParaphraseQuery, ParaphraseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParaphraseQuery, ParaphraseQueryVariables>(ParaphraseDocument, options);
      }
export function useParaphraseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParaphraseQuery, ParaphraseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParaphraseQuery, ParaphraseQueryVariables>(ParaphraseDocument, options);
        }
export type ParaphraseQueryHookResult = ReturnType<typeof useParaphraseQuery>;
export type ParaphraseLazyQueryHookResult = ReturnType<typeof useParaphraseLazyQuery>;
export type ParaphraseQueryResult = Apollo.QueryResult<ParaphraseQuery, ParaphraseQueryVariables>;
export function refetchParaphraseQuery(variables?: ParaphraseQueryVariables) {
      return { query: ParaphraseDocument, variables: variables }
    }
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    ...UserItem
  }
}
    ${UserItemFragmentDoc}`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export function refetchCurrentUserQuery(variables?: CurrentUserQueryVariables) {
      return { query: CurrentUserDocument, variables: variables }
    }
export const OnMessageAddedDocument = gql`
    subscription onMessageAdded {
  onMessageAdded {
    message
  }
}
    `;

/**
 * __useOnMessageAddedSubscription__
 *
 * To run a query within a React component, call `useOnMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnMessageAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnMessageAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnMessageAddedSubscription, OnMessageAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnMessageAddedSubscription, OnMessageAddedSubscriptionVariables>(OnMessageAddedDocument, options);
      }
export type OnMessageAddedSubscriptionHookResult = ReturnType<typeof useOnMessageAddedSubscription>;
export type OnMessageAddedSubscriptionResult = Apollo.SubscriptionResult<OnMessageAddedSubscription>;