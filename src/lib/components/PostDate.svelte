<script>
	import { format, parseISO } from 'date-fns';

	export let post;
</script>

<div>
	<div>
		<time datetime={post.date}>
			{format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}
		</time>
		<span>{post.readingTime}</span>
	</div>
</div>
