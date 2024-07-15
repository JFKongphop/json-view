import { JsonLine } from "@/type/type";

export const iterate = (obj: object, indent = 0): JsonLine[] => {
  const jsonLines: JsonLine[] = [];

  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] === "object" && !Array.isArray(obj[property])) {
        jsonLines.push({ indent, line: property + ":" });
        jsonLines.push(...iterate(obj[property], indent + 1));
      } else if (Array.isArray(obj[property])) {
        jsonLines.push({ indent, line: property + ":" });
        obj[property].forEach((item: any) => {
          jsonLines.push({ indent: indent + 1, line: item });
        });
      } else {
        jsonLines.push({ indent, line: `${property}: ${obj[property]}` });
      }
    }
  }

  return jsonLines;
};
