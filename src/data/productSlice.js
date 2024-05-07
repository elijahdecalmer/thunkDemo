import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchProductsForCategory from "./fetchProductsForCategory"

const initialState = {
  allProducts: [],
  loading: false,
  error: null,
};

export const loadCategoryProducts = createAsyncThunk(
  "loadCategory",
  async (categoryName, thunkAPI) => {
    if (!categoryName)
      return thunkAPI.rejectWithValue("No category name provided.");
    try {
      const ret = await fetchProductsForCategory(categoryName);
      return ret;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const prodList = createSlice({
  name: "prodList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategoryProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.allProducts = action.payload;
      })
      .addCase(loadCategoryProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.allProducts = {};
      });
  },
});
export const selectProdList = (state) => state.prodList;
export default prodList.reducer;