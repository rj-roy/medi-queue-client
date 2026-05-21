// import { getAllTuros } from "@/lib/getData";
// import { useEffect, useState } from "react";

// export default function useTutorSearch() {
//     const [allTutors, setAllTutors] = useState([]);
//     const [results, setResults] = useState([]);

//     const [selectedCategories, setSelectedCategories] = useState([]);

//     const [searchQuery, setSearchQuery] = useState("");

//     useEffect(() => {
//         const loadTutors = async () => {
//             const data = await getAllTuros();

//             setAllTutors(data);
//             setResults(data);
//         };

//         loadTutors();
//     }, []);

//     const handleCategory = (category) => {
//         setSelectedCategories((prev) => {
//             if (prev.includes(category)) {
//                 return prev.filter((item) => item !== category);
//             }

//             return [...prev, category];
//         });
//     };

//     useEffect(() => {
//         let filtered = [...allTutors];

//         if (selectedCategories.length > 0) {
//             filtered = filtered.filter((tutor) =>
//                 selectedCategories.includes(
//                     tutor.subject_category.toLowerCase()
//                 )
//             );
//         }

//         if (searchQuery.trim()) {
//             filtered = filtered.filter((tutor) =>
//                 tutor.tutor_name
//                     .toLowerCase()
//                     .includes(searchQuery.toLowerCase())
//             );
//         }

//         // eslint-disable-next-line react-hooks/set-state-in-effect
//         setResults(filtered);
//     }, [selectedCategories, searchQuery, allTutors]);

//     return {
//         results,
//         allTutors,

//         selectedCategories,
//         handleCategory,

//         searchQuery,
//         setSearchQuery,
//     };
// }














// // import { getAllTuros } from "@/lib/getData";
// // import { use, useEffect, useState } from "react"

// // export default function useCategoryFilter() {
// //     const [selectedCategories, setSelectedCategories] = useState([]);
// //     const [allTutots, setAllTutors] = useState([]);
// //     const [result, setResult] = useState([])

// //     const gAllTuros = use(getAllTuros());
// //     console.log(gAllTuros);


// //     const handleCategory = (category) => {
// //         setSelectedCategories((prev) => {
// //             if (prev.includes(category)) {
// //                 return prev.filter((item) => item !== category);
// //             }
// //             return [...prev, category];
// //         });
// //         const filteredTutors = allTutots.filter((tutor)=>{
// //             tutor.subject_category.some((category)=>{
// //                 selectedCategories.includes(category.toLowerCase())
// //             })
// //         });
// //         console.log(filteredTutors);
// //     };

// //     return {
// //         result,
// //         selectedCategories,
// //         handleCategory
// //     };
// // };