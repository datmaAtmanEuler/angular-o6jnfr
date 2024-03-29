import * as _ from 'underscore';

export class PagerService {
    numberOfPageItem = 5;

    setNumberOfPageItem(n: number) {
        this.numberOfPageItem = n;
    }

    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number, endPage: number;

        if (totalPages <= this.numberOfPageItem) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= this.numberOfPageItem - 2) {
                startPage = 1;
                endPage = this.numberOfPageItem;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - (this.numberOfPageItem - 1);
                endPage = totalPages;
            } else {
                startPage = currentPage - Math.floor(this.numberOfPageItem / 2);
                endPage = currentPage + Math.floor(this.numberOfPageItem / 2);
            }
        }

        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        const pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}