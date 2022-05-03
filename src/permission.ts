import router from "./router";
import { useUserStore } from "@/stores/user";
import { useHostStore } from "@/stores/host";

router.beforeEach(async (to, from, next) => {
  const { checkLogin, isLogin } = useUserStore();
  const { isInit } = useHostStore();
  if (!isLogin && isInit) {
    await checkLogin();
    next();
  } else {
    next();
  }
});
