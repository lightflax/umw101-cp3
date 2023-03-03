<Text>
{posts.map((post) => {
   return (
<Text key={post.id}>
    <Text style={styles.post-title}>{post.title}</Text>
    <Text style={styles.post-body}>{post.body}</Text>
    <Button style={button} title='Delete' onPress={() => alert('Du tryckte på knappen')}></Button>
    </Text>

   );
})}
</Text>