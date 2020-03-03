import axios from "axios";
import decode from "jwt-decode";

export default class API {
  register(u, e, p, t) {
    let body = JSON.stringify({
      email: e,
      password: p,
      username: u,
      type: t
    });
    console.log("body", body);
    return axios
      .post("http://localhost/Backend/API/" + "register.php", body)
      .then(res => {
        console.log("res", res);
        return Promise.resolve(res);
      })
      .catch(error => {
        console.log(error);
        return Promise.resolve(error.response);
      });
  }

  login(u, p) {
    let body = JSON.stringify({
      email: u,
      password: p
    });
    return axios
      .post("http://localhost/Backend/API/" + "login.php", body)
      .then(res => {
        localStorage.setItem("jwt", res.data.jwt);
        return Promise.resolve(res);
      })
      .catch(error => {
        // console.log("responce data", error.response.data.message);
        return Promise.resolve(error);
      });
  }

  validate(jwt) {
    let body = JSON.stringify({
      jwt: jwt
    });
    return axios
      .post("http://localhost/Backend/API/" + "validate_token.php", body)
      .then(res => {
        return Promise.resolve(res.data.data);
      })
      .catch(error => {
        //console.log(error);
        return Promise.resolve(error);
      });
  }

  logout() {
    localStorage.removeItem("jwt");
  }

  getToken() {
    return localStorage.getItem("jwt");
  }

  getProfile() {
    if (this.getToken()) return decode(this.getToken()).data;
    else return 0;
  }

  addCompany(data) {
    let body = JSON.stringify(data);
    return axios
      .post("http://localhost/Backend/API/" + "addcompany.php", body)
      .then(res => {
        //console.log("resdata", res.data);
        return Promise.resolve(res);
      })
      .catch(error => {
        //console.log("responce data", error.response.data.message);
        return Promise.resolve(error.response.data);
      });
  }

  updateCompany(data) {
    let body = JSON.stringify(data);
    //console.log("body", body);

    return axios
      .post("http://localhost/Backend/API/" + "updatecompany.php", body)
      .then(res => {
        //console.log("resdata", res.data);
        return Promise.resolve(res);
      })
      .catch(error => {
        //console.log("responce data", error.response.data.message);
        return Promise.resolve(error.response.data);
      });
  }

  updateCompanyService(data) {
    let body = JSON.stringify(data);
    return axios
      .post("http://localhost/Backend/API/" + "updateservice.php", body)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(error => {
        // console.log("resdata from update backend", error.response.data.message);
        return Promise.resolve(error.response.data);
      });
  }

  getCompanyInfo(id) {
    let body = JSON.stringify({
      id: id
    });
    return axios
      .post("http://localhost/Backend/API/" + "getcompanyinfo.php", body)
      .then(res => {
        //console.log("getCompanyInfo api responce.data :", res.data);
        return Promise.resolve(res);
      })
      .catch(error => {
        //console.log("getCompanyInfo api error:", error.response.data.message);
        return Promise.resolve(error.response.data);
      });
  }

  getAllItems() {
    return axios
      .post("http://localhost/Backend/API/" + "getallitems.php")
      .then(res => {
        // console.log("get AllItems API response data : ", res.data);
        return Promise.resolve(res.data);
      })
      .catch(error => {
        //console.log("get AllItems API error", error.response.data.message);
        return Promise.resolve(error.response.data);
      });
  }

  getCompanyServices(companyid) {
    let body = JSON.stringify({
      companyid: companyid
    });
    return axios
      .post("http://localhost/Backend/API/" + "getcompanyitems.php", body)
      .then(res => {
        // console.log("resdata", res.data);
        return Promise.resolve(res);
      })
      .catch(error => {
        // console.log("error data", error.response.data.message);
        return Promise.resolve(error.response);
      });
  }

  addCompanyService(data) {
    let body = JSON.stringify(data);
    return axios
      .post("http://localhost/Backend/API/" + "addservice.php", body)
      .then(res => {
        // console.log("resdata", res.data);
        return Promise.resolve(res);
      })
      .catch(error => {
        //console.log("responce data", error.response.data.message);
        return Promise.resolve(error.response.data);
      });
  }

  removeCompanyService(id) {
    let body = JSON.stringify({
      itemid: id
    });
    return axios
      .post("http://localhost/Backend/API/" + "removeservice.php", body)
      .then(res => {
        // console.log("resdata from remove", res.data);
        return Promise.resolve(res.data);
      })
      .catch(error => {
        // console.log("responce data from remove", error.response.data.message);
        return Promise.resolve(error.response.data);
      });
  }

  uploadImage(file, id) {
    let body = JSON.stringify({
      img: file,
      companyid: id
    });

    return axios
      .post("http://localhost/Backend/API/" + "uploadresizedimage.php", body)
      .then(res => {
        //console.log("test", res);
        return Promise.resolve(res.data);
      })
      .catch(error => {
        // console.log("errorrr", error);

        return Promise.resolve(error);
      });
  }

  addCoupon(data) {
    let body = JSON.stringify(data);
    return axios
      .post("http://localhost/Backend/API/" + "addcoupon.php", body)
      .then(res => {
        // console.log("resdata", res.data);
        return Promise.resolve(res.data);
      })
      .catch(error => {
        //console.log("responce data", error.response.data.message);
        return Promise.resolve(error.response.data);
      });
  }

  getUserCoupons(userid) {
    let body = JSON.stringify({
      userid: userid
    });
    return axios
      .post("http://localhost/Backend/API/" + "getusercoupons.php", body)
      .then(res => {
        // console.log("resdata", res);
        return Promise.resolve(res);
      })
      .catch(error => {
        // console.log("responce data", error.response.data.message);
        return Promise.resolve(error.response);
      });
  }

  getCompanyCoupons(companyid) {
    let body = JSON.stringify({
      companyid: companyid
    });
    return axios
      .post("http://localhost/Backend/API/" + "getcompanycoupons.php", body)
      .then(res => {
        // console.log("resdata", res);
        return Promise.resolve(res);
      })
      .catch(error => {
        // console.log("responce data", error.response.data.message);
        return Promise.resolve(error.response);
      });
  }

  addComment(data) {
    let body = JSON.stringify(data);
    return axios
      .post("http://localhost/Backend/API/" + "addcomment.php", body)
      .then(res => {
        // console.log("resdata", res.data);
        return Promise.resolve(res.data);
      })
      .catch(error => {
        // console.log("responce data", error.response.data.message);
        return Promise.resolve(error.response.data);
      });
  }

  getCompanyComments(companyid) {
    let body = JSON.stringify({
      companyid: companyid
    });
    return axios
      .post("http://localhost/Backend/API/" + "getcompanycomment.php", body)
      .then(res => {
        //console.log("resdata from api.js", res);
        return Promise.resolve(res);
      })
      .catch(error => {
        return Promise.resolve(error.response);
      });
  }
}
