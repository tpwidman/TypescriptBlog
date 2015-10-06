module blog {
	export class BlogService {
        public static $inject = ['$resource'];
		constructor($resource: angular.resource.IResourceService) {
		}
	}

}
