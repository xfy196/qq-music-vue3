import router from "./router";
import { useUserStore } from "@/stores/user";

router.beforeEach(async (to, from, next) => {
  const { checkLogin, isLogin } = useUserStore();
  if (!isLogin) {
    await checkLogin();
    next();
  } else {
    next();
  }
});
