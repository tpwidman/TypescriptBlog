module blog {
	export class BlogListCtrl {

		public static $inject = ['$scope', '$location', 'BlogService'];


		constructor(
			public $scope: IBlogScope,
			public $location: angular.ILocationService,
			public blogService: IPostResource
		){
		}

	}

}