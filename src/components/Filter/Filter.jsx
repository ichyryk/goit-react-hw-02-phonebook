export const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="name"
      //   value={value}
      placeholder="Filter by name"
      onChange={onChange}
      required
    />
  );
};

// export const Filter = ({ value, onChange }) => {
//   return (
//     <input
//       type="text"
//       name="name"
//       //   value={value}
//       placeholder="Filter by name"
//       onChange={onChange}
//       required
//     />
//   );
// };
