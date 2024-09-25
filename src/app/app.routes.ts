import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { ProfileDetailComponent } from "./profile-detail/profile-detail.component";
import { AuthGuard } from "./guards/auth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: EmployeeListComponent },
      { path: "add", component: AddEmployeeComponent },
      { path: "profile", component: ProfileDetailComponent },
    ],
  },
  { path: "**", redirectTo: "/login" },
];

