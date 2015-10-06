module blog {
	export class BlogRoute {
		public static $inject = ['$routeProvider'];

		constructor(
			private $routeProvider: angular.route.IRouteProvider
		){ }
	}

}