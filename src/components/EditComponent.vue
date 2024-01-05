<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update goes here -->
            <h1>Edit Data</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="employee.name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" v-model="employee.email" required>
                </div>
                <div class="form-group">
                    <label for="designation">Designation</label>
                    <input type="text" class="form-control" v-model="employee.designation" required>
                </div>
                
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" v-model="employee.phoneNumber" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            employee: {}
        }
    },
    created() {
        let apiURL = `http://localhost:4001/api/edit-employee/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.employee = res.data
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4001/api/update-employee/${this.$route.params.id}`;

            axios.put(apiURL, this.employee).then((res) => {
                console.log(res);
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
