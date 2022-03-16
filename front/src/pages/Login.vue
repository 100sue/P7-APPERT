<script>
export default {
    name:"Login",
 data() {
    return {
      email: "",
      password: "",
      show: true,
      error: "",
      emailRegex: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      passwordRegex: /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
    };
  },
  methods: {
    //Fonction de vérification de la longueur des données
    lenghtCheck(length, object, message) {
      if (object.length === length) {
        this.error = "Votre " + message + " est trop long";
      } else {
        this.error = "";
      }
    },
    //Fonction d'inscription
    signup() {
      let newUser = {
        email: this.email,
        password: this.password,
        profil_picture: url.substring(0, url.length - 4) + "images/avatar.png",
      };
      if (!this.emailRegex.test(this.email)) {
        return (this.error = "Vous devez renseigner une adresse email valide");
      } else if (!this.pseudoRegex.test(this.pseudo)) {
        return (this.error =
          "Votre pseudo doit contenir au moins 3 caractères");
      } else if (!this.passwordRegex.test(this.password)) {
        return (this.error =
          "Votre mot de passe doit contenir au moins 8 caractères et au moins 1 lettre et 1 chiffre");
      }
      this.$http.post(url + "users", newUser)
        .then((res) => {
          if (res.status === 200) {
            this.$http.post(url + "users/login", newUser) //si inscription fonctionne = login
              .then((res) => {
                if (res.status === 200) {
                  localStorage.setItem("currentUser", JSON.stringify(res.data));
                  this.$router.push("/");
                }
              })
              .catch(() => {
                localStorage.clear();
                this.error = "Un problème est survenu, veuillez réessayer";
              });
          }
        })
        .catch((err) => {
          if (err.response.status === 409) {
            this.error = "Adresse email déjà utilisée";
          } else {
            this.error = "Un problème est survenu, veuillez réessayer";
          }
        });
    },
  },
};
</script>



<template>
<main class="form-signin">
  <form>
    <img class="mb-4 d-block mx-auto" src="../../icon.svg" alt="" width="72" height="57">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>
</template>


<style>
html,
body {
  align-items: center;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      
</style>