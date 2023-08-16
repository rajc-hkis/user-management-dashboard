// User types
export const USER_TYPES = {
  USER: "User",
  ADMIN: "Admin",
};

// Minimum eight characters, at least one letter and one number:
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;

export const ERRORS = {
  username: "Please enter username",
  email: "Email is required",
  password: "Minimum eight characters, at least one letter and one number",
  role: "Please select user role",
};
