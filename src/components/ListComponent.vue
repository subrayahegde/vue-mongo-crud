<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <h1>Show Employees</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Designation</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="employee in Employees" :key="employee._id">
                                <td>{{ employee.name }}</td>
                                <td>{{ employee.email }}</td>
                                <td>{{ employee.designation }}</td>
                                <td>{{ employee.phoneNumber }}</td>
                                <td>
                                    <router-link :to="{name: 'edit', params: {id: employee._id}}" class="btn btn-success">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteEmployee(employee._id)" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            Employees: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4001/api';
        axios.get(apiURL).then(res => {
            this.Employees = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteEmployee(id) {
            let apiURL = `http://localhost:4001/api/delete-employee/${id}`;
            let indexOfArrayItem = this.Employees.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Employees.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>
