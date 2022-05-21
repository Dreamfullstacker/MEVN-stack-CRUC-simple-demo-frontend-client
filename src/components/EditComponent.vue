<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Student content -->
            <!-- Content goes here -->
            <h3 class="text-center">Update Students</h3>
            <form @submit.prevent = "handleUpdateForm">
                <div class="form-group mb-3 mt-3">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model = "student.name" required>
                </div>
                <div class="form-group mb-3 mt-3">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model = "student.email" required>
                </div>

                <div class="form-group mb-3 mt-3">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model = "student.phone" required>
                </div>

                <div class="form-grou mb-3 mt-3">
                    <button class="btn btn-success btn-block col-md-12">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                student: { }
            }
        },
        created() {
            let apiURL = `http://localhost:3030/api/edit/${this.$route.params.id}`;
            
            axios.get(apiURL).then((res) => {
                this.student = res.data;
                console.log(this.student);
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            handleUpdateForm(){
                let apiURL = `http://localhost:3030/api/update/${this.$route.params.id}`;

                if (window.confirm("Do you really want to delete?" + `${this.$route.params.id}`)) {
                    axios.put(apiURL , this.student).then(() => {
                        this.$router.push('/view')
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>