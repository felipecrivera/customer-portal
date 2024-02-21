import { configureStore } from "@reduxjs/toolkit";
import { recordApi } from "./recordApi";
import { reportApi } from "./reportApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { customerApi } from "./customerApi";
import { campaignApi } from "./campaignApi";

export const store = configureStore({
  reducer: {
    [recordApi.reducerPath]: recordApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [campaignApi.reducerPath]: campaignApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      recordApi.middleware,
      reportApi.middleware,
      customerApi.middleware,
      campaignApi.middleware
    ),
});

setupListeners(store.dispatch);
