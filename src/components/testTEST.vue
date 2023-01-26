<template>
    <div>
        <div class="text-white">
        {{ res[0].title }}
    </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
    data() {
        return {
            res: [],
        };
    },
    name: "App",
    async mounted() {
        // The get method called by the function
            await axios
            .get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    console.log(response);
                    // using stringify to beautify the output
                    this.res = response.data;
                })
                .catch((errors) => {
                    console.log(errors); // Errors
                });
        },
    };
</script>
