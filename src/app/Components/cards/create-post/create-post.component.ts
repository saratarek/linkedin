import { Posts } from "./../../../Models/Posts";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"]
})
export class CreatePostComponent implements OnInit {
  privacy: string[] = [
    "Anyone",
    "Anyone + Twitter",
    "Connections Only",
    "Advanced Settings"
  ];
  imgUrls: string[] = [];
  currPrivacy: string = "Anyone";
  constructor(public us: UserService) {}
  block = false;

  onSpanClicked() {
    this.block = false;
  }
<<<<<<< HEAD
  // onWindowClick(modal)
  // {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }

  // }
  onBtnClick() {
    console.log("ghjn");
    this.block = true;
    console.log(this.block);
    // modal.style.display = "block";
  }
  onPrivacyClick(privacy) {
    this.currPrivacy = privacy;
=======


 
// onWindowClick(modal)
// {
  //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    
    // }
 
onPrivacyClick(privacy)
{
  this.currPrivacy=privacy;
}
post(text)
{ 
 
  let post:Posts={
id:this.us.currentUser.posts.length+1,
userId:this.us.currentUser.id,
body:text.value,
likes:0,
replies:0,
onComment:false,
onHoverReact:false,
onHover:false,
liked:false,
imageUrls:this.imgUrls,
comments:[]
};
this.us.currentUser.posts.push(post);
this.us.update(this.us.currentUser)
console.log(this.us.currentUser)
console.log(this.us.Users)

  // console.log(text.value)
  // console.log(this.currPrivacy)
  // console.log(this.imgUrls)
}
onFileChanged(e)
{
  this.imgUrls=[];
  for (const img of e.target.files) {
    this.imgUrls.push(img.name)
>>>>>>> 56c3cdae35b403bbf1025a9fcf21f52d574c56f0
  }
  post(text) {
    let post: Posts = {
      id: this.us.currentUser.posts.length + 1,
      userId: this.us.currentUser.id,
      body: text.value,
      likes: 0,
      imageUrls: this.imgUrls,
      comments: []
    };
    this.us.currentUser.posts.push(post);
    this.us.update(this.us.currentUser);
    console.log(this.us.currentUser);
    console.log(this.us.Users);
    // console.log(text.value)
    // console.log(this.currPrivacy)
    // console.log(this.imgUrls)
  }
  onFileChanged(e) {
    this.imgUrls = [];
    for (const img of e.target.files) {
      this.imgUrls.push(img.name);
    }
  }
  ngOnInit() {}
}
