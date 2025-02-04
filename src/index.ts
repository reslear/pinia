export { setActivePinia } from './rootStore'
export { createPinia } from './createPinia'
export type { Pinia, PiniaStorePlugin, PiniaPluginContext } from './rootStore'

export { defineStore } from './store'
export type { StoreActions, StoreGetters, StoreState } from './store'

export type {
  StateTree,
  Store,
  StoreGeneric,
  // TODO: remove in release
  GenericStore,
  StoreDefinition,
  StoreWithGetters,
  GettersTree,
  ActionsTree,
  _Method,
  StoreWithActions,
  StoreWithState,
  StoreProperties,
  StoreOnActionListener,
  StoreOnActionListenerContext,
  SubscriptionCallback,
  SubscriptionCallbackMutation,
  SubscriptionCallbackMutationDirect,
  SubscriptionCallbackMutationPatchFunction,
  SubscriptionCallbackMutationPatchObject,
  _SubscriptionCallbackMutationBase,
  PiniaCustomProperties,
  PiniaCustomStateProperties,
  DefineStoreOptionsBase,
  DefineStoreOptions,
  DefineSetupStoreOptions,
  DefineStoreOptionsInPlugin,
} from './types'
export { MutationType } from './types'

export {
  mapActions,
  mapStores,
  mapState,
  mapWritableState,
  mapGetters,
  setMapStoreSuffix,
} from './mapHelpers'

export { storeToRefs } from './storeToRefs'

export type {
  MapStoresCustomization,
  _MapActionsObjectReturn,
  _MapActionsReturn,
  _MapStateObjectReturn,
  _MapStateReturn,
  _MapWritableStateObjectReturn,
  _MapWritableStateReturn,
  _Spread,
  _StoreObject,
} from './mapHelpers'

export { createTestingPinia } from './testing'
export type { TestingOptions, TestingPinia } from './testing'

export { acceptHMRUpdate } from './hmr'

export { PiniaPlugin } from './vue2-plugin'
