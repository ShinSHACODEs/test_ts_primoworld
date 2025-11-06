import { expect } from "chai";
import { merge } from "../src/main.ts";

// describe ใช้สำหรับกลุ่ม test
describe("merge", () => {

  // ทดสอบ merge arr 3 ตัวเป็น array เดียว
  it("merge 3 arr", () => {
    const collection_1 = [1, 4, 7]; // เรียงน้อยไปมาก
    const collection_2 = [2, 5, 8]; // เรียงน้อยไปมาก
    const collection_3 = [9, 6, 3]; // เรียงมากไปน้อย

    const result = merge(collection_1, collection_2, collection_3);

    console.log("ผลลัพธ์จากการเรียง:", result);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
