import router from "./router"
import { useUserStore } from "@/stores/user";

router.beforeEach(async (to, from, next) => {
  const { checkLogin } = useUserStore();
  await checkLogin();
  next();
});

