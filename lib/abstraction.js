// export function getAllAbstractions() {
//   const fileNames = fs.readdirSync(abstractionsDirectory);

//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         abstraction: fileName.replace(/\.md$/, ''),
//       },
//     };
//   })
// }

// export function getAbstractionData(abstraction) {
//   const fullPath = path.join(abstractionDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   const matterResult = matter(fileContents);

//   return{
//     abstraction,
//     ...matterResult.data
//   };
// }