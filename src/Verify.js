import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

export function Verify(email, pw, err, setEmail, setPw, setErr) {
  if (email == "") {
    setErr((prev) => {
      return [...prev, { id: uuidv4(), msg: "Email cannot be blank" }];
    });
  }
  var idx = email.lastIndexOf("@");
  if (idx > -1 && email.slice(idx + 1) === "webdevsimplified.com") {
  } else {
    setErr((prev) => {
      return [
        ...prev,
        { id: uuidv4(), msg: "Must end in @webdevsimplified.com" },
      ];
    });
  }
  if (pw === "") {
    setErr((prev) => {
      return [...prev, { id: uuidv4(), msg: " Password cannot be blank" }];
    });
  }
  if (pw.length < 10) {
    setErr((prev) => {
      return [
        ...prev,
        { id: uuidv4(), msg: " Password must Be 10 characters or longer" },
      ];
    });
  }
  let lower = 0;
  for (let i = 0; i < pw.length; i++) {
    if (pw.charAt(i) === pw.charAt(i).toLowerCase()) {
      lower++;
    }
  }
  if (lower == 0) {
    setErr((prev) => {
      return [
        ...prev,
        { id: uuidv4(), msg: " Password must include a lowercase letter" },
      ];
    });
  }
  let upper = 0;
  for (let i = 0; i < pw.length; i++) {
    if (pw.charAt(i) === pw.charAt(i).toUpperCase()) {
      upper++;
    }
  }
  if (upper == 0) {
    setErr((prev) => {
      return [
        ...prev,
        { id: uuidv4(), msg: " Password must include a Uppercase letter" },
      ];
    });
  }
  let num = 0;
  for (let i = 0; i < pw.length; i++) {
    if (parseInt(pw.charAt(i)) >= 0 || parseInt(pw.charAt(i)) <= 9) {
      num++;
    }
  }
  if (num == 0) {
    setErr((prev) => {
      return [
        ...prev,
        { id: uuidv4(), msg: " Password must  include a number" },
      ];
    });
  }

  //   if (err.length == 0) {
  //     alert("success");
  //   }
  //return [email, pw];
}
