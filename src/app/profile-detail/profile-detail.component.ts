import { Component, Input } from "@angular/core";

@Component({
  selector: "app-profile-detail",
  standalone: true,
  templateUrl: "./profile-detail.component.html",
  styleUrls: ["./profile-detail.component.css"],
})
export class ProfileDetailComponent {
  @Input() profile: {
    username: string;
    fullName: string;
    email: string;
    role: string;
    imageUrl: string;
  } = {
    username: "My Girl",
    fullName: "Sayar Ma Gyi",
    email: "sayarmagyi123@gmail.com",
    role: "My Queen",
    imageUrl:
      "https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png", // Default image URL
  };

  editProfile() {
    // Logic to handle editing the profile
    console.log("Edit Profile Logic");
  }

  deleteProfile() {
    // Logic to handle deleting the profile
    console.log("Delete Profile Logic");
  }
}
