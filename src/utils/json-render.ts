// export const iterate = (obj: object, indent = 0): any[] => {
//   const jsonLines: any[] = [];
//   for (var property in obj) {
//     if (obj.hasOwnProperty(property)) {
//       if (typeof obj[property] == "object" && !Array.isArray(obj[property])) {
//         console.log("  ".repeat(indent) + property + ":");
//         jsonLines.push("  ".repeat(indent) + property + ":");
//         iterate(obj[property], indent + 1);
//       } 
//       else if (Array.isArray(obj[property])) {
//         console.log("  ".repeat(indent) + property + ":");
//         jsonLines.push("  ".repeat(indent) + property + ":");
//         obj[property].forEach((item: any) => {
//           console.log("  ".repeat(indent + 1) + item);
//           jsonLines.push("  ".repeat(indent + 1) + item);
//         });
//       } 
//       else {
//         console.log("  ".repeat(indent) + property + ": " + obj[property]);
//         jsonLines.push("  ".repeat(indent) + property + ": " + obj[property]);
//       }
//     }
//   }

//   return jsonLines;
// }

export const iterate = (obj: object, indent = 0): any[] => {
  const jsonLines: any[] = [];
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] === "object" && !Array.isArray(obj[property])) {
        // console.log("  ".repeat(indent) + property + ":");
        jsonLines.push("  ".repeat(indent) + property + ":");
        jsonLines.push(...iterate(obj[property], indent + 1));
      } else if (Array.isArray(obj[property])) {
        // console.log("  ".repeat(indent) + property + ":");
        jsonLines.push("  ".repeat(indent) + property + ":");
        obj[property].forEach((item: any) => {
          // console.log("  ".repeat(indent + 1) + item);
          jsonLines.push("  ".repeat(indent + 1) + item);
        });
      } else {
        // console.log("  ".repeat(indent) + property + ": " + obj[property]);
        jsonLines.push("  ".repeat(indent) + property + ": " + obj[property]);
      }
    }
  }
  return jsonLines;
}
