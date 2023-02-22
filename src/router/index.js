import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../components/views/no-auth/LoginView.vue'
import RegisterView from '../components/views/no-auth/RegisterView.vue';
import BookItems from '../components/views/book/bookItems.vue';
import BoardgameItems from '../components/views/boardgame/BoardgameItems.vue';
import BoardgameStore from '../components/views/boardgame/BoardgameStore.vue';
import RecipeItems from '../components/views/recipe/RecipeItems.vue';
import { useSessionStore } from "@/stores/session-store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/book/items',
      name: 'book.items',
      component: BookItems
    },
    {
      path: '/boardgame.items',
      name: 'boardgame.items',
      component: BoardgameItems
    },
    {
      path: '/boardgame.item.store',
      name: 'boardgame.item.store',
      component: BoardgameStore,
    },
    {
      path: '/recipe.items',
      name: 'recipe.items',
      component: RecipeItems
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// Helpers
async function isAuthenticated(session) {
	var condition = false;

	var token = session.getToken;
	var user = session.getUser;
// Helpers
// Guard private routes if no authenticated.
router.beforeEach((to, from, next) => {
  const session = useSessionStore();
	isAuthenticated(session).then(status => {
		const DEFAULT_HOME_NOAUTH_ROUTE = 'login'
		// Not authenticated
		if (status == false) {
			if (to.name == 'login' || to.name == 'register') { //add another routes with no preview login
				return next();
			}
      else {
				console.log('404 - redirecting to login form...');
				return next({name: DEFAULT_HOME_NOAUTH_ROUTE});
			}
		}
    // Authenticated
    else {
      return next();
    }
	});
});
// If we have session data in the browser's localStorage...
if (token.length !== 0 || Object.keys(user).length !== 0) {

  // Set config headers...
  setDefaultHeaders(session);
  // Try to fetch the user data
  try {
    var response = await AuthService.fetchToken();
    session.setUser(response);
    session.setStatus(response.status);
    session.setProfilePicture(response.profile_picture_public_url);

    // Get unsend notifications
    var response2 = await NotificationService.getUnsendNotifications(session.getUser.id);
    session.setNotifications(response2.data);

    condition = true;
  }
  catch (error) {
    // If some error happens... handle the error...
    var result = AuthService.handleAuthError(error); 
    // ... clean the session data...
    session.logout();
  }
}

return condition;
}

// Set default headers
function setDefaultHeaders(session) {
	Axios.defaults.headers.common['Authorization'] = `Bearer ${session.token}`;
}

export default router
