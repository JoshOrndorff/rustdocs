(function() {var implementors = {};
implementors["libp2p_core"] = [];
implementors["libp2p_mplex"] = [{text:"impl&lt;C&gt; <a class=\"trait\" href=\"libp2p_core/muxing/trait.StreamMuxer.html\" title=\"trait libp2p_core::muxing::StreamMuxer\">StreamMuxer</a> for <a class=\"struct\" href=\"libp2p_mplex/struct.Multiplex.html\" title=\"struct libp2p_mplex::Multiplex\">Multiplex</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>",synthetic:false,types:["libp2p_mplex::Multiplex"]},];
implementors["libp2p_yamux"] = [{text:"impl&lt;C&gt; <a class=\"trait\" href=\"libp2p_core/muxing/trait.StreamMuxer.html\" title=\"trait libp2p_core::muxing::StreamMuxer\">StreamMuxer</a> for <a class=\"struct\" href=\"libp2p_yamux/struct.Yamux.html\" title=\"struct libp2p_yamux::Yamux\">Yamux</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + 'static,&nbsp;</span>",synthetic:false,types:["libp2p_yamux::Yamux"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
