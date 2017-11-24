
import { StorageKey } from './constants'

function storedValueForKey(key) {
  return NSThread.currentThread().threadDictionary()[`${StorageKey}.${key}`];
}

export default function(context) {
  const oldSelection = storedValueForKey('old');
  let newSelection = storedValueForKey('new');

  const newSet = NSMutableSet.setWithArray(NSSet.setWithArray(oldSelection));
  newSet.minusSet(NSSet.setWithArray(newSelection));
  newSelection = newSet.allObjects();

  const firstSelectedLayer = context.document.documentData().layerWithID(oldSelection.firstObject())
  print("First:");
  print(firstSelectedLayer)


  const lastSelectedLayer = context.document.documentData().layerWithID(newSelection.firstObject())
  print("Last:");
  print(lastSelectedLayer);
}

