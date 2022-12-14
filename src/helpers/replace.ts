export type Replace<T, R> = Omit<T, keyof R> & R;

// Replace is a kind of help function from TypeScript
// "T" means original type (props)
// "R" means replacement type, which will be replaced
// Omit is a helper function from TypeScript that can be used to create a object type that omits specific properties from another object type
