
import { StorageKey } from './constants'

const storeLayerIDsForKey = (layers,key) => {
  NSThread.currentThread().threadDictionary()[`${StorageKey}.${key}`] = layers.valueForKeyPath("@distinctUnionOfObjects.objectID");
};

export default function(context) {
  storeLayerIDsForKey(context.actionContext.oldSelection,'old');
  storeLayerIDsForKey(context.actionContext.newSelection,'new');
}
