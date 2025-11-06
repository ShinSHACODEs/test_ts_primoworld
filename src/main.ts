// Test for upload to github
// Merge three sorted arrays into one sorted array

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {

  // สร้าง arr เก็บ
  let result: number[] = [];

  // col3 max ไป min
  let col3: number[] = [];
  for (let i = collection_3.length - 1; i >= 0; i--) {
    col3.push(collection_3[i]);
  }

  let i = 0;
  let j = 0;
  let k = 0;

  // loop จนกว่าจะเอา element ทั้งหมดจาก 3 arr
  while (i < collection_1.length || j < collection_2.length || k < col3.length) {

    // ถ้า index เกิน length ใช้ Infinity
    let value1 = i < collection_1.length ? collection_1[i] : Infinity;
    let value2 = j < collection_2.length ? collection_2[j] : Infinity;
    let value3 = k < col3.length ? col3[k] : Infinity;

    // เปรียบเทียบค่าเพื่อหา element ที่เล็กที่สุด
    if (value1 <= value2 && value1 <= value3) {
      result.push(value1);
      i++;
    } else if (value2 <= value1 && value2 <= value3) {
      result.push(value2);
      j++;
    } else {
      result.push(value3);
      k++;
    }
  }

  return result; 
}
