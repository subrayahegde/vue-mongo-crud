<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Content goes here -->
            <h1>Create Employee</h1>
            <form @submit.prevent="handleSubmitForm">
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
                    <input type="designation" class="form-control" v-model="employee.designation" required>
                </div>
                
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" v-model="employee.phoneNumber" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-block">Create</button>
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
            employee: {
                name: '',
                email: '',
                designation: '',
                phoneNumber: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4001/api/create-employee';

            axios.post(apiURL, this.employee).then(() => {
                this.$router.push('/view');
                this.employee = {
                    name: '',
                    email: '',
                    designation: '', 
                    phoneNumber: ''
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
