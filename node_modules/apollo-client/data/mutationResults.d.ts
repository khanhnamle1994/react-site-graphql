import { ApolloAction } from '../actions';
import { ApolloExecutionResult } from '../core/types';
export declare type MutationQueryReducer<T> = (previousResult: Object, options: {
    mutationResult: ApolloExecutionResult<T>;
    queryName: string | null;
    queryVariables: Object;
}) => Object;
export declare type MutationQueryReducersMap<T = {
    [key: string]: any;
}> = {
    [queryName: string]: MutationQueryReducer<T>;
};
export declare type OperationResultReducer = (previousResult: Object, action: ApolloAction, variables: Object) => Object;
export declare type OperationResultReducerMap = {
    [queryId: string]: OperationResultReducer;
};
