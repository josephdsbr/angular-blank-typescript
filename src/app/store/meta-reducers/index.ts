import { MetaReducer } from '@ngrx/store';
import { storageSyncMetaReducer } from 'ngrx-store-persist';

export const CommonsMetaReducer: MetaReducer[] = [storageSyncMetaReducer];
