export const passwordToggle = () => {
  const svgIcon = document.getElementById('myInput');
  if (svgIcon.type === 'password') {
    svgIcon.type = 'text';
  } else {
    svgIcon.type = 'password';
  }
};
