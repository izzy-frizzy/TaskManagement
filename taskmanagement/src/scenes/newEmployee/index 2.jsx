import React from "react";
import { FormControl, TextField, Button, FormLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const NewEmployee = () => {
  const SuperAdmin = "SuperAdmin";
  const Admin = "Admin";
  const User = "User";

  const [role, setRole] = useState(SuperAdmin);

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div>
      <h3>Create New Employee</h3>

      <FormControl>
        <div>
          <FormLabel htmlFor="name">
            <h3>Name:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="name" />
        </div>

        <div>
          <FormLabel htmlFor="email">
            <h3>Email:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="email" />
        </div>
        <div>
          <FormLabel htmlFor="password">
            <h3>Password:</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="password" />

          <FormLabel htmlFor="confirm-password">
            <h3>Confirm Password</h3>
          </FormLabel>
          <TextField color="warning" required={true} id="confirm-password" />
        </div>

        <div>
          <FormLabel htmlFor="role">
            <h3>Role:</h3>
          </FormLabel>
          <Select onChange={handleRoleChange} fullWidth value={role} label="role">
            <MenuItem value={SuperAdmin}>SuperAdmin</MenuItem>
            <MenuItem value={Admin}>Admin</MenuItem>
            <MenuItem value={User}>User</MenuItem>
          </Select>
        </div>
    
        <Button>
          <h3>Create Employee</h3>
        </Button>
      </FormControl>
    </div>
  );
};

export default NewEmployee;