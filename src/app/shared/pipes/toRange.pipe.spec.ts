import {ToRangePipe} from './toRange.pipe';


export function main() {
  describe('ToRangePipe test', () => {
    var pipe = new ToRangePipe();
    it('should transform integer without a problem', function () {
      expect(pipe.transform(5, 1)).toEqual([1, 2, 3, 4]);
      expect(pipe.transform(5, 0)).toEqual([0, 1, 2, 3, 4]);
    });
    it('should transform integer with step without a problem', function () {
      expect(pipe.transform(6, 0, 2)).toEqual([0, 2, 4]);
      expect(pipe.transform(10, 1, 3)).toEqual([1, 4, 7]);
    });
    it('should transform float without a problem', function () {
      expect(pipe.transform(5.123, 0)).toEqual([0, 1, 2, 3, 4, 5]);
    });
  });
}
