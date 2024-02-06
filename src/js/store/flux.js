const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			users: [],
			starships: [],
			planets: [],
			characters: {},
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			addFav:(name,id)=>{
				const store = getStore();
				if(!store.favorites.filter((fav) => fav === name).length){
					setStore({favorites:[...store.favorites, name]})
					}
			},
			deleteFav:(name)=>{
				const store = getStore();
				setStore({favorites:[...store.favorites.filter((fav) => fav !== name)]});
				},

			getUsers: async () => {
				const url = "https://swapi.dev/api/people";
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const detail = data.results;
					setStore({ users: detail });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			getStarships: async () => {
				const url = "https://swapi.dev/api/starships";
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const detail = data.results;
					setStore({ starships: detail });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			getPlanets: async () => {
				const url = "https://swapi.dev/api/planets";
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const details = data.results;
					setStore({ planets: details });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			addToFavorites: (item, type) => {
				const store = getStore();
				// Comprueba que no esté seleccionado.
				const isAlreadyFavorited = store.favorites.some((fav) => fav.id === item.id);
		
				if (!isAlreadyFavorite) {
				  // Agregar a favoritos.
				  setStore({ favorites: [...store.favorites, { ...item, type }] });
				}
			 },

			 
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
