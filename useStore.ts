import {Todo, todo} from './store/todo';

interface Store {
  todo: Todo;
}

function useStore(): Store {
  return {todo};
}

export default useStore;
