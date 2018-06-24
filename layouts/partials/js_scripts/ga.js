window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', '{{ .Site.GoogleAnalytics }}', 'auto');
{{ if .Site.Params.privacy_pack }}ga('set', 'anonymizeIp', true);{{ end }}
ga('require', 'eventTracker');
ga('require', 'outboundLinkTracker');
ga('require', 'urlChangeTracker');
ga('send', 'pageview');
