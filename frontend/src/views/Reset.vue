<template>
    <v-row class="resetPassword">
        <v-col>
            <h1>Reset Password</h1>
            <v-form ref="resetPasswordForm" @submit.prevent="resetPassword">
                <div class="form-group">
                    <v-text-field
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="password"
                        label="email"
                    />
                </div>
                <v-btn type="submit" class="btn btn-primary">Reset Password</v-btn>
            </v-form>
        </v-col>
</template>

    <script>
        import axios from "axios";

        export default {
            name: "Reset",
            data() {
                return {
                    email: "",
                };
            },
            methods: {
                resetPassword() {
                    axios.defaults.headers.common["Authorization"] = "";
                    axios
                        .post("/api/v1/users/reset_password", {
                            email: this.email,
                        })
                },
            },
        };
    </script>