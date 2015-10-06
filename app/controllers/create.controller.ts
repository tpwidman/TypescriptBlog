module blog {

	export class BlogCreateCtrl {

		public static $inject = ['$scope', '$location', 'BlogService'];

		constructor(
			public $scope: IBlogScope,
			public $location: angular.ILocationService,
			public blogService: IPostResource
		){
			
		}

	}
}
