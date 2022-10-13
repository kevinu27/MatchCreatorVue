<template>
    <div>
        <header class="header__navbar">
            <div class="navbar">
                <h1 class="navbar__logo"><a href="https://codepen.io/cryptoctopus/collections/popular/">Match Creator</a></h1>
            <ul class="navbar__links">
                <!-- <li><a href="#">Home</a></li> -->
                <li><a href="https://github.com/RenaudGagne">Profile</a></li>
                <!-- <li><a href="https://codepen.io/cryptoctopus/collections/popular/">Pen Collection</a></li> -->
                
            </ul>
            </div>
        </header> 

    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
        return {
        };
    },
 
  }
</script>

<style scoped>

* {
	box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

body {
	font-family: sans-serif;
	line-height: 1.6;
	margin: 0;
	min-height: 100vh;
  font-size: 1.6rem;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1,h2,h3,a,p {
	color: #34495e;
}
a {
	text-decoration: none;
}
.header__navbar {
  padding: 0 0;
  border: 1px solid #a2a2a2;
	background-color: #efefef;
	-webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
    /* position: sticky; */
  top: 0;
}
.navbar__logo a, .navbar__links a {
    text-transform: uppercase;
    text-align: center;
    display: block;
  }
.navbar__logo {
    margin: 0;
    padding: 1rem 0;
  }
  .navbar__links a:not(last-child) {
      padding: 2rem;
    }
    
    .navbar a:hover {
      color: orangered;
    }

.navbar {
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 3rem;
  
  
 


}

main {
  max-width: 136.6rem;
  padding: 3rem;
  margin: 0 auto;
  min-height: 100vh;
}
/* ================================= 
  Media Queries
==================================== */
@media (min-width: 769px) {
	.navbar,
	.navbar__links {
		display: flex;
	}
	.navbar {
		flex-direction: column;
		align-items: center;
		width: 80%;
		margin: 0 auto;
		max-width: 1366px;
    
	}

}

@media (min-width: 1025px) {
	.navbar {
		flex-direction: row;
		justify-content: space-between;        
	}
}
</style>