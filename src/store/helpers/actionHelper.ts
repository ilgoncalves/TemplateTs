export function action<T extends string>(type: T) : {
  type: T,
}

export function action<T extends string, P>(type: T, payload: P) : {
  type: T,
  payload: P
}

export function action<T extends string, P>(type: T, payload?: P) {
  return {
    type,
    payload,
  };
}
