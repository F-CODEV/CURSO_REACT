import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'

// * REDUX ES EL PATRON
// * REACT REDUX SERIE DE COMPONENTES

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch